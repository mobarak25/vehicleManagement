<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    //
    public function type(){
        return $this->belongsTo(VehicleType::class, 'type_id');
    }
    
}
