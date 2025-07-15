<?php

namespace App\Filament\Pages;

use App\Models\Booking;
use Filament\Pages\Page;
use Filament\Tables\Table;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\Filter;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Columns\Summarizers\Sum;


class LaporanPendapatan extends Page implements HasTable
{
    use InteractsWithTable;

    protected static ?string $navigationIcon = 'heroicon-o-document-chart-bar';
    protected static string $view = 'filament.pages.laporan-pendapatan';
    protected static ?string $title = 'Laporan Pendapatan';
    protected static ?string $navigationGroup = 'Laporan';

    public function table(Table $table): Table
    {
        return $table
            ->query(Booking::query())
            ->columns([
                ImageColumn::make('payment_proof')->label('Bukti Bayar'),
                TextColumn::make('created_at')->label('Tgl. Pesan')->date()->sortable(),
                TextColumn::make('name')->label('Nama Pemesan')->searchable(),
                TextColumn::make('package.name')->label('Paket'),
                TextColumn::make('package.price')->label('Pendapatan')->money('IDR')->sortable()
                    ->summarize(Sum::make()->label('Total')->money('IDR')),
            ])
            ->filters([
                SelectFilter::make('package')->relationship('package', 'name'),
                Filter::make('created_at')
                    ->form([
                        DatePicker::make('created_from')->label('Dari Tanggal'),
                        DatePicker::make('created_until')->label('Sampai Tanggal'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query
                            ->when($data['created_from'], fn ($query, $date) => $query->whereDate('created_at', '>=', $date))
                            ->when($data['created_until'], fn ($query, $date) => $query->whereDate('created_at', '<=', $date));
                    })
            ])
            ->headerActions([
                
            ]);
    }
}
