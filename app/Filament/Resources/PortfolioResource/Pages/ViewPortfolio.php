<?php

namespace App\Filament\Resources\PortfolioResource\Pages;

use App\Filament\Resources\PortfolioResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\ImageEntry;

class ViewPortfolio extends ViewRecord
{
    protected static string $resource = PortfolioResource::class;

    
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
                
                Section::make('Gambar')
                    ->schema([
                        ImageEntry::make('image')->hiddenLabel(),
                    ]),

                
                Section::make('Detail')
                    ->schema([
                        TextEntry::make('title')->label('Judul'),
                        TextEntry::make('position')->label('Posisi Urutan'),
                    ])->columns(2),
            ]);
    }
}