<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Package;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        

        $packages = [
            [
                'name' => 'Paket Wisuda Silver',
                'description' => 'Sesi foto wisuda di studio untuk 1 orang, termasuk cetak foto dan semua file digital.',
                'image' => 'package-images/wisuda.jpg', 
                'price' => 850000,
                'duration_in_hours' => 1,
            ],
            [
                'name' => 'Paket Pernikahan Gold (Akad & Resepsi)',
                'description' => 'Liputan lengkap hari pernikahan, dari akad nikah hingga resepsi. Termasuk album kolase eksklusif dan video sinematik.',
                'image' => 'package-images/pernikahan.jpg',
                'price' => 8500000,
                'duration_in_hours' => 8,
            ],
            [
                'name' => 'Paket Foto Keluarga Harmonis',
                'description' => 'Sesi foto keluarga ceria di studio atau outdoor. Maksimal 5 orang. Mendapatkan 10 foto edit terbaik.',
                'image' => 'package-images/keluarga.jpg',
                'price' => 1200000,
                'duration_in_hours' => 2,
            ],
            [
                'name' => 'Paket Lamaran Intim',
                'description' => 'Dokumentasi momen lamaran spesial Anda bersama keluarga terdekat. Termasuk foto candid dan foto bersama.',
                'image' => 'package-images/lamaran.jpg',
                'price' => 2500000,
                'duration_in_hours' => 3,
            ],
            [
                'name' => 'Paket Syukuran & Hajatan Lain',
                'description' => 'Mengabadikan momen syukuran atau aqiqah buah hati Anda. Termasuk foto dan video dokumentasi acara.',
                'image' => 'package-images/aqiqah.jpg',
                'price' => 3000000,
                'duration_in_hours' => 4,
            ],
        ];

        foreach ($packages as $packageData) {
            Package::create($packageData);
        }
    }
}