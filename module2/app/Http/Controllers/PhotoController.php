<?php

namespace App\Http\Controllers;

use App\Http\Resources\PhotoResource;
use App\Photo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class PhotoController extends Controller
{
    public function upload(Request $request)
    {
        $user = User::getByToken($request->bearerToken());

        $vl = Validator::make($request->all(), [
            'photo' => ['required', 'image', 'mimes:jpeg,png,jpg']
        ]);

        if ($vl->fails()) {
            $resp = [];
            $vv = $vl->errors()->toArray();
            foreach ($vv as $v_k => $v_v)
                $resp[$v_k] = $v_v[0];
            return response()->json($resp)->setStatusCode(422, 'Unprocessable entity');
        }

        $ph = $request->file('photo');

        $photo = Photo::create([
            'owner_id' => $user->id
        ]);
        $filename = 'original_' . $photo->id . '.' . $ph->getClientOriginalExtension();
        $ph->move(base_path('/photos'), $filename);
        $photo->file = $filename;
        $photo->save();
        return response()->json(['id' => $photo->id, 'name' => 'Untitled', 'url' => $photo->url()])->setStatusCode(201, 'Created');
    }

    public function photoChange(Request $request, $id)
    {
        $photo = Photo::find($id);
        $user = User::getByToken($request->bearerToken());
        $vl = Validator::make($request->all(), ['_method' => Rule::in(['patch'])]);
        if ($vl->fails()) {
            $resp = [];
            $vv = $vl->errors()->toArray();
            foreach ($vv as $v_k => $v_v)
                $resp[$v_k] = $v_v[0];
            return response()->json($resp)->setStatusCode(422, 'Unprocessable entity');
        }
        if ($photo->author->id !== $user->id)
            return response('', 403);
        if ($request->has('name'))
            $photo->name = $request->get('name');
        if ($request->has('photo')) {
            $b64 = $request->get('photo');
            $b64 = str_replace(' ', '+', explode(',', explode(';', $b64)[1])[1]);
            $filename = 'edited_' . $photo->id . '.png';
            File::put(base_path('photos/' . $filename), base64_decode($b64));
            $photo->file = $filename;
        }
        if ($photo->isDirty())
            $photo->save();

        return response()->json(['id' => $photo->id, 'name' => $photo->name, 'url' => $photo->url()]);
    }

    public function delete(Request $request, $id)
    {
        $photo = Photo::find($id);
        $user = User::getByToken($request->bearerToken());
        if ($photo->author->id !== $user->id)
            return response('', 403);
        File::delete(base_path('/photo/' . $photo->file));
        return response('')->setStatusCode(204, 'Deleted');
    }

    public function getPhoto(Request $request)
    {
        $user = User::getByToken($request->bearerToken());
        $photos = $user->photos;
        $access = $user->access;
        return response()->json(array_merge(PhotoResource::collection($photos)->toArray($request), PhotoResource::collection($access)->toArray($request)))->setStatusCode(200);
    }

    public function share(Request $request, $id)
    {
        $user = User::getByToken($request->bearerToken());
        $uto = User::find($id);
        $exist = [];
        foreach ($request->get('photos') as $item) {
            $eloq = Photo::find($item);
            if (!$eloq)
                continue;

            if ($eloq->owner_id != $user->id)
                continue;

            if ($uto->access()->where('photo_id', '=', $item)->count())
                $exist[] = $item;

            $uto->access()->attach($item);
        }

        return response()->json(['existing_photos' => $exist])->setStatusCode(201, 'Created');
    }

    public function getOne(Request $request, $id)
    {
        $photo = Photo::find($id);
        return response()->json(PhotoResource::make($photo)->toArray($request))->setStatusCode(200);
    }
}
