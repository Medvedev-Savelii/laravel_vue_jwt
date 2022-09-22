<?php

namespace App\Http\Controllers\Fruit;
use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResource;
use App\Models\Fruit;
use App\Models\User;

class IndexController extends Controller
{
    public function __invoke()
    {
        $fruits = User::all();
        return $fruits;
    }
}
