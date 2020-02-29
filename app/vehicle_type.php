<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class vehicle_type extends Model
{
    //
    public function type(){
        return $this->hasOne('App\Phone');
    }
}
