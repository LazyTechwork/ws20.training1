<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'digits:11', 'unique:users'],
            'password' => ['required', 'string'],
        ]);
    }

    public function register(Request $request)
    {
        $vl = $this->validator($request->all());

        if ($vl->fails()) {
            $resp = [];
            $vv = $vl->errors()->toArray();
            foreach ($vv as $v_k => $v_v)
                $resp[$v_k] = $v_v[0];
            return response()->json($resp)->setStatusCode(422, 'Unprocessable entity');
        }

        $user = User::create([
            'first_name' => $request->get('first_name'),
            'surname' => $request->get('surname'),
            'phone' => $request->get('phone'),
            'password' => Hash::make($request->get('password'))
        ]);

        $this->guard()->login($user);

        return response()->json(['id' => $user->id])->setStatusCode(201, 'Created');
    }
}
