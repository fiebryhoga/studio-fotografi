<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        Portfolio::truncate();

        $portfolios = [
            [
                'title' => 'Akad Nikah - Rian & Vina',
                'image' => 'portfolio-images/pernikahan-akad.jpg',
                'position' => 1,
            ],
            [
                'title' => 'Wisuda Universitas Indonesia',
                'image' => 'portfolio-images/wisuda-ui.jpg',
                'position' => 2,
            ],
            [
                'title' => 'Sesi Foto Keluarga di Senayan Park',
                'image' => 'portfolio-images/keluarga-senayan.jpg',
                'position' => 3,
            ],
            [
                'title' => 'Resepsi Pernikahan - Rian & Vina',
                'image' => 'portfolio-images/pernikahan-resepsi.jpg',
                'position' => 4,
            ],
            [
                'title' => 'Foto Produk Kopi Lokal',
                'image' => 'portfolio-images/produk-kopi.jpg',
                'position' => 5,
            ],
        ];

        foreach ($portfolios as $data) {
            Portfolio::create($data);
        }
    }
}