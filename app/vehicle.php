<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class vehicle extends Model
{
    //
    public function type(){
        return $this->belongsTo(vehicle_type::class);
    }
}
