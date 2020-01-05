<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class ApiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $usr = User::getByToken($request->bearerToken());
        if (!$usr)
            return response()->json(['message' => 'You need authorization'])->setStatusCode(403, 'Forbidden');
        else
            return $next($request);
    }
}
