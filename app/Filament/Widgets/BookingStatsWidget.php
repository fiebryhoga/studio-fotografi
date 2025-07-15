<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use App\Models\Package;
use App\Models\Portfolio;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class BookingStatsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        
        $totalRevenue = Booking::with('package')->get()->sum('package.price');

        return [
            
            Stat::make('Total Pendapatan', 'Rp ' . number_format($totalRevenue, 0, ',', '.'))
                ->description('Total dari semua pemesanan')
                ->icon('heroicon-o-currency-dollar')
                ->color('success'),

            Stat::make('Total Pemesanan', Booking::count())
                ->description('Semua pemesanan yang masuk')
                ->icon('heroicon-o-shopping-cart')
                ->color('primary'),
            
            Stat::make('Total Paket', Package::count())
                ->description('Jumlah paket yang ditawarkan')
                ->icon('heroicon-o-archive-box')
                ->color('info'),
        ];
    }
}