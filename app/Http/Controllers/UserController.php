<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index() {
        $users = User::select('id', 'name', 'email')->get();

        return Inertia::render('User/index', ['users' => $users]);
    }
}
