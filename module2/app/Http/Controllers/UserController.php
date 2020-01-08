<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function search(Request $request)
    {
        $user = User::getByToken($request->bearerToken());
        $searchquery = $request->get('search');
        $query = User::query();
        foreach (explode(' ', $searchquery) as $item)
            $query->orWhere(DB::raw("CONCAT(first_name, ' ', surname, ' ', phone)"), 'LIKE', '%' . $item . '%');

        $query->where('id', '!=', $user->id);
        $resp = $query->get(['id', 'first_name', 'surname', 'phone']);
        return response()->json($resp)->setStatusCode(200);
    }
}
