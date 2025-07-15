<?php

namespace App\Filament\Resources;


use App\Filament\Resources\PackageResource\Pages;
use App\Models\Package;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PackageResource extends Resource
{
    protected static ?string $model = Package::class;
    protected static ?string $navigationIcon = 'heroicon-o-archive-box';

    

    public static function form(Form $form): Form
{
    return $form
        ->schema([
            
            Forms\Components\Group::make()
                ->schema([
                    
                    Forms\Components\Section::make('Informasi Paket')
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->maxLength(255),
                            
                            
                            Forms\Components\Group::make()->schema([
                                Forms\Components\TextInput::make('price')
                                    ->required()
                                    ->numeric()
                                    ->prefix('Rp'),
                                Forms\Components\TextInput::make('duration_in_hours')
                                    ->required()
                                    ->numeric()
                                    ->suffix('Jam'),
                            ])->columns(2),

                            Forms\Components\Textarea::make('description')
                            ->required()
                            ->maxLength(150)
                            ->columnSpanFull(),
                        ]),
                ])
                ->columnSpan(['lg' => 2]), 

            
            Forms\Components\Group::make()
                ->schema([
                    Forms\Components\Section::make('Gambar')
                        ->schema([
                            Forms\Components\FileUpload::make('image')
                                ->image()
                                ->directory('package-images')
                                ->imageEditor()
                                ->hiddenLabel(), 
                        ]),
                ])
                ->columnSpan(['lg' => 1]), 
        ])
        ->columns(3); 
}

public static function table(Table $table): Table
{
    return $table
        ->columns([
            Tables\Columns\ImageColumn::make('image'),
            Tables\Columns\TextColumn::make('name')
                ->searchable(),

            Tables\Columns\TextColumn::make('description')
                ->limit(50)
                ->toggleable(isToggledHiddenByDefault: true),

            Tables\Columns\TextColumn::make('price')
                ->money('IDR')
                ->sortable(),

            Tables\Columns\TextColumn::make('duration_in_hours')
                ->numeric()
                ->suffix(' Jam')
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),

            Tables\Columns\TextColumn::make('created_at')
                ->dateTime()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
        ])
        ->filters([
            //
        ])
        ->actions([
            
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
        ])
        ->bulkActions([
            Tables\Actions\BulkActionGroup::make([
                Tables\Actions\DeleteBulkAction::make(),
            ]),
        ]);
}


    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPackages::route('/'),
            'create' => Pages\CreatePackage::route('/create'),
            'edit' => Pages\EditPackage::route('/{record}/edit'),
        ];
    }
}