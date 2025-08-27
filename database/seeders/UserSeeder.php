<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Create admin user
        User::updateOrCreate(
            ['email' => 'admin@campus.ac.id'],
            [
                'name' => 'Admin Campus',
                'email' => 'admin@campus.ac.id',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );

        // Create sample alumni users
        User::updateOrCreate(
            ['email' => 'alumni1@example.com'],
            [
                'name' => 'John Doe Alumni',
                'email' => 'alumni1@example.com',
                'password' => Hash::make('password'),
                'role' => 'alumni',
                'student_id' => '2019001',
                'graduation_year' => '2023',
                'study_program' => 'Teknik Informatika',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'alumni2@example.com'],
            [
                'name' => 'Jane Smith Alumni',
                'email' => 'alumni2@example.com',
                'password' => Hash::make('password'),
                'role' => 'alumni',
                'student_id' => '2018002',
                'graduation_year' => '2022',
                'study_program' => 'Sistem Informasi',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'alumni3@example.com'],
            [
                'name' => 'Bob Johnson Alumni',
                'email' => 'alumni3@example.com',
                'password' => Hash::make('password'),
                'role' => 'alumni',
                'student_id' => '2017003',
                'graduation_year' => '2021',
                'study_program' => 'Manajemen',
                'email_verified_at' => now(),
            ]
        );
    }
}