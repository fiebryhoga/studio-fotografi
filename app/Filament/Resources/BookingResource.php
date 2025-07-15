<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BookingResource\Pages;
use App\Filament\Resources\BookingResource\RelationManagers;
use App\Models\Booking;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BookingResource extends Resource
{
    protected static ?string $model = Booking::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    



public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Section::make('Detail Pemesanan')
                ->schema([
                    Forms\Components\Select::make('package_id')
                        ->relationship('package', 'name')
                        ->required(),
                    Forms\Components\DatePicker::make('booking_date')
                        ->label('Tanggal Booking')
                        ->required(),
                ])->columns(2),

            Forms\Components\Section::make('Identitas Pemesan')
                ->schema([
                    Forms\Components\TextInput::make('name')->required(),
                    Forms\Components\TextInput::make('phone_number')->label('Nomor Telepon')->required(),
                    Forms\Components\Textarea::make('address')->label('Alamat')->required()->columnSpanFull(),
                    Forms\Components\Textarea::make('message')->label('Pesan Tambahan')->columnSpanFull(), 
                ])->columns(2),
            
            Forms\Components\Section::make('Bukti Pembayaran')
                ->schema([
                    Forms\Components\FileUpload::make('payment_proof')
                        ->directory('payment-proofs')
                        ->image()
                        ->required(), 
                ]),
        ]);
}

public static function table(Table $table): Table
{
    return $table
        ->columns([
            Tables\Columns\TextColumn::make('package.name')->label('Paket')->sortable(),
            Tables\Columns\TextColumn::make('name')->label('Nama Pemesan')->searchable(),
            Tables\Columns\TextColumn::make('booking_date')->label('Tgl. Booking')->date()->sortable(),
            Tables\Columns\TextColumn::make('message') 
                ->label('Pesan')
                ->limit(30)
                ->default('-') 
                ->toggleable(),
            Tables\Columns\ImageColumn::make('payment_proof')->label('Bukti Bayar'),
        ])
        ->defaultSort('created_at', 'desc')
        ->filters([
            Tables\Filters\SelectFilter::make('package_id')
                ->label('Jenis Paket')
                ->relationship('package', 'name'),
        ])
        ->actions([
            Tables\Actions\ActionGroup::make([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]),
        ])
        ->bulkActions([
            Tables\Actions\BulkActionGroup::make([
                Tables\Actions\DeleteBulkAction::make(),
            ]),
        ]);
}

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBookings::route('/'),
        'create' => Pages\CreateBooking::route('/create'),
        'view' => Pages\ViewBooking::route('/{record}'),
        'edit' => Pages\EditBooking::route('/{record}/edit'),
        ];
    }
}
