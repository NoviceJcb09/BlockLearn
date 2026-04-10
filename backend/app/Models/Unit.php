<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    public function course () {
        return $this->belongsTo(Course::class);
    }
}
