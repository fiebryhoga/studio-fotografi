<?php

namespace App\Filament\Exports;

use App\Models\Booking;
use Filament\Actions\Exports\ExportColumn;
use Filament\Actions\Exports\Exporter;
use Filament\Actions\Exports\Models\Export;

class BookingExporter extends Exporter
{
    protected static ?string $model = Booking::class;

    public static function getColumns(): array
    {
        
        return [
            ExportColumn::make('id')
                ->label('ID Pemesanan'),
            ExportColumn::make('payment_proof')
                ->label('Bukti Pembayaran'),
            ExportColumn::make('name')
                ->label('Nama Pemesan'),
            ExportColumn::make('phone_number')
                ->label('Nomor Telepon'),
            ExportColumn::make('address')
                ->label('Alamat'),
            ExportColumn::make('package.name') 
                ->label('Paket Dipilih'),
            ExportColumn::make('package.price') 
                ->label('Harga Paket'),
            ExportColumn::make('booking_date')
                ->label('Tanggal Booking'),
            ExportColumn::make('message')
                ->label('Pesan Tambahan'),
            ExportColumn::make('created_at')
                ->label('Tanggal Pesan Dibuat'),
            ExportColumn::make('updated_at')
                ->label('Terakhir Diperbarui'),
        ];
    }

    public static function getCompletedNotificationBody(Export $export): string
    {
        
        $body = 'Laporan pemesanan Anda sudah selesai diekspor dan berisi ' . number_format($export->successful_rows) . ' baris.';

        if ($failedRowsCount = $export->failed_rows) {
            $body .= ' ' . number_format($failedRowsCount) . ' baris gagal diekspor.';
        }

        return $body;
    }
}