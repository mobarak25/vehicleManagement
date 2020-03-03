<?php

namespace App\Http\Controllers;

use App\VehicleType;
use Illuminate\Http\Request;

class VehicleTypeController extends Controller
{
    public function add_type(Request $request){
        //return $request->all();
        $this->$request->validate([
            'vehicle_type' => 'required|min:5|max:255'
        ]);

        $type = New VehicleType();
        $type->vehicle_type = $request->vehicle_type;
        $type->save();
    }
}
