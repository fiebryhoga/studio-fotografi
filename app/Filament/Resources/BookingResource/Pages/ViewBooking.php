<?php

namespace App\Filament\Resources\BookingResource\Pages;

use App\Filament\Resources\BookingResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components;

class ViewBooking extends ViewRecord
{
    protected static string $resource = BookingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }

    

public function infolist(Infolist $infolist): Infolist
{
    return $infolist
        ->schema([
            Components\Section::make('Informasi Pemesanan')
                ->schema([
                    Components\TextEntry::make('package.name')->label('Paket yang Dipesan'),
                    Components\TextEntry::make('booking_date')->label('Tanggal Booking')->date(),
                ])->columns(2),
            
            Components\Section::make('Identitas Pemesan')
                ->schema([
                    Components\TextEntry::make('name')->label('Nama'),
                    Components\TextEntry::make('phone_number')->label('Nomor Telepon'),
                    Components\TextEntry::make('address')->label('Alamat')->columnSpanFull(),
                    
                    Components\TextEntry::make('message')->label('Pesan Tambahan')->default('-')->columnSpanFull(),
                ])->columns(2),
            
            Components\Section::make('Bukti Pembayaran')
                ->schema([
                    Components\ImageEntry::make('payment_proof')->hiddenLabel(),
                ])->visible(fn ($record) => $record->payment_proof),
        ]);
}
}