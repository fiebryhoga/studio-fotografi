<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use Filament\Widgets\ChartWidget;

class BookingsChart extends ChartWidget
{
    protected static ?string $heading = 'Pendapatan Berdasarkan Jenis Paket';
    protected static ?int $sort = 1;

    protected function getData(): array
    {
        
        $data = Booking::with('package')
            ->get()
            ->groupBy('package.name')
            ->map(function ($group) {
                return $group->sum('package.price');
            });

        return [
            'datasets' => [
                [
                    'label' => 'Pendapatan',
                    'data' => $data->values(),
                    
                    'backgroundColor' => [
                        '#E8C2CA', 
                        '#A3B8A1', 
                        '#FDE9ED', 
                        '#F9A8D4',
                        '#A5B4FC',
                    ],
                ],
            ],
            'labels' => $data->keys(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}