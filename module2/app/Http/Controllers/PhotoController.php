<?php

namespace App\Http\Controllers;

use App\Photo;
use App\User;
use Illuminate\Http\Request;
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
        $ph->move(base_path('/photo'), $filename);
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
        if($photo->isDirty())
            $photo->save();

        return response()->json(['id'=>$photo->id, 'name'=>$photo->name, 'url'=>$photo->url()]);
    }
}
