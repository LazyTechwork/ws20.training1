<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $vl = Validator::make($request->all(), [
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);

        if ($vl->fails()) {
            $resp = [];
            $vv = $vl->errors()->toArray();
            foreach ($vv as $v_k => $v_v)
                $resp[$v_k] = $v_v[0];
            return response()->json($resp)->setStatusCode(422, 'Unprocessable entity');
        }

        if ($this->attemptLogin($request)) {
            $token = $this->guard()->user()->generateToken();
            return response()->json(['token' => $token])->setStatusCode(200, 'OK');
        }

        return response()->json(['login'=>'Incorrect login or password'])->setStatusCode(404, 'Not found');
    }

    public function username()
    {
        return 'phone';
    }

    public function logout()
    {
        return response('', 200);
    }
}
