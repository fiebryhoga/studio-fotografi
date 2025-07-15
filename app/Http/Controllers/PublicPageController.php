<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicPageController extends Controller
{
    public function index()
    {
        
        $packages = Package::all();

        
        $portfolios = Portfolio::orderBy('position')->get();

        
        return Inertia::render('Public/Index', [
            'packages' => $packages,
            'portfolios' => $portfolios,
        ]);
    }
}