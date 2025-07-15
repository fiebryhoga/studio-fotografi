<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'package_id',
        'booking_date',
        'name',
        'phone_number',
        'address',
        'message',
        'payment_proof',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}