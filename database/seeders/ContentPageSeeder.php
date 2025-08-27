<?php

namespace Database\Seeders;

use App\Models\ContentPage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentPageSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $contentPages = [
            [
                'key' => 'about-us',
                'title' => 'Tentang Kami',
                'content' => '<h2>Sejarah Kampus</h2>
                <p>Campus merupakan institusi pendidikan tinggi yang berdedikasi dalam menghasilkan lulusan berkualitas dan siap berkompetisi di dunia kerja. Didirikan dengan visi untuk menjadi pusat keunggulan dalam pendidikan dan penelitian.</p>
                
                <h2>Visi</h2>
                <p>Menjadi institusi pendidikan tinggi yang unggul dan terdepan dalam menghasilkan lulusan yang kompeten, inovatif, dan berintegritas tinggi.</p>
                
                <h2>Misi</h2>
                <ul>
                <li>Menyelenggarakan pendidikan tinggi yang berkualitas dan relevan dengan kebutuhan industri</li>
                <li>Mengembangkan penelitian dan pengabdian masyarakat yang bermanfaat</li>
                <li>Membangun karakter mahasiswa yang berintegritas dan bertanggung jawab</li>
                <li>Menciptakan lingkungan akademik yang kondusif untuk pembelajaran</li>
                </ul>',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'study-programs',
                'title' => 'Profil Program Studi',
                'content' => '<h2>Program Studi yang Tersedia</h2>
                
                <h3>Teknik Informatika (S1)</h3>
                <p>Program studi yang fokus pada pengembangan teknologi informasi dan sistem komputer. Lulusan dipersiapkan untuk menjadi software engineer, system analyst, dan IT consultant yang handal.</p>
                <ul>
                <li>Akreditasi: A</li>
                <li>Durasi: 4 tahun (8 semester)</li>
                <li>Gelar: Sarjana Komputer (S.Kom)</li>
                </ul>
                
                <h3>Sistem Informasi (S1)</h3>
                <p>Program studi yang menggabungkan teknologi informasi dengan manajemen bisnis. Lulusan dipersiapkan untuk menjadi business analyst, project manager, dan IT strategist.</p>
                <ul>
                <li>Akreditasi: A</li>
                <li>Durasi: 4 tahun (8 semester)</li>
                <li>Gelar: Sarjana Komputer (S.Kom)</li>
                </ul>
                
                <h3>Manajemen (S1)</h3>
                <p>Program studi yang fokus pada pengembangan kemampuan manajerial dan kepemimpinan. Lulusan dipersiapkan untuk menjadi manager, entrepreneur, dan konsultan bisnis.</p>
                <ul>
                <li>Akreditasi: B</li>
                <li>Durasi: 4 tahun (8 semester)</li>
                <li>Gelar: Sarjana Ekonomi (S.E)</li>
                </ul>',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'lecturers',
                'title' => 'Profil Dosen',
                'content' => '<h2>Dosen Berkualitas</h2>
                <p>Kampus kami bangga memiliki tim dosen yang berpengalaman dan berkualifikasi tinggi dalam bidangnya masing-masing.</p>
                
                <h3>Dr. Ahmad Wijaya, M.Kom</h3>
                <p><strong>Bidang Keahlian:</strong> Artificial Intelligence, Machine Learning</p>
                <p><strong>Jabatan:</strong> Ketua Program Studi Teknik Informatika</p>
                <p>Memiliki pengalaman lebih dari 15 tahun dalam bidang AI dan telah menerbitkan lebih dari 30 paper internasional.</p>
                
                <h3>Prof. Dr. Siti Nurhaliza, M.M</h3>
                <p><strong>Bidang Keahlian:</strong> Strategic Management, Entrepreneurship</p>
                <p><strong>Jabatan:</strong> Ketua Program Studi Manajemen</p>
                <p>Praktisi bisnis dengan pengalaman 20 tahun dan konsultan untuk berbagai perusahaan multinasional.</p>
                
                <h3>Dr. Budi Santoso, M.T</h3>
                <p><strong>Bidang Keahlian:</strong> Database Systems, Information Systems</p>
                <p><strong>Jabatan:</strong> Ketua Program Studi Sistem Informasi</p>
                <p>Expert dalam bidang database dan sistem informasi dengan pengalaman industri 18 tahun.</p>',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'contact',
                'title' => 'Kontak Kami',
                'content' => '<h2>Hubungi Kami</h2>
                <p>Kami siap membantu dan memberikan informasi yang Anda butuhkan. Silakan hubungi kami melalui:</p>
                
                <h3>📍 Alamat</h3>
                <p>Jl. Pendidikan No. 123<br>
                Kota Pendidikan, Provinsi Ilmu<br>
                Indonesia 12345</p>
                
                <h3>📞 Telepon</h3>
                <p>+62 21 1234 5678<br>
                +62 21 1234 5679 (Fax)</p>
                
                <h3>📧 Email</h3>
                <p>info@campus.ac.id<br>
                admisi@campus.ac.id</p>
                
                <h3>🌐 Website & Media Sosial</h3>
                <p>Website: www.campus.ac.id<br>
                Instagram: @campus_official<br>
                Facebook: Campus Official<br>
                YouTube: Campus Channel</p>
                
                <h3>🕒 Jam Operasional</h3>
                <p>Senin - Jumat: 08.00 - 16.00 WIB<br>
                Sabtu: 08.00 - 12.00 WIB<br>
                Minggu & Hari Libur: Tutup</p>',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($contentPages as $page) {
            ContentPage::updateOrCreate(
                ['key' => $page['key']],
                $page
            );
        }
    }
}