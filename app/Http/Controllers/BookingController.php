<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'address' => 'required|string',
            'package_id' => 'required|exists:packages,id',
            'booking_date' => 'required|date',
            'message' => 'nullable|string',
            'payment_proof' => 'required|image|max:10240',
        ]);

        
        if ($request->hasFile('payment_proof')) {
            $path = $request->file('payment_proof')->store('payment-proofs', 'public');
            $validated['payment_proof'] = $path;
        }

        Booking::create($validated);

        return Redirect::back()->with('success', 'Pemesanan Anda telah berhasil dikirim!');
    }
}