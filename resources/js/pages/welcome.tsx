import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';



export default function Welcome() {
    return (
        <>
            <Head title="Beranda - Campus Website" />
            
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-green-100">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🎓</span>
                                </div>
                                <h1 className="text-2xl font-bold text-green-800">Campus</h1>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href={route('home')} className="text-green-700 hover:text-green-900 font-medium">Beranda</Link>
                                <Link href={route('announcements.index')} className="text-gray-700 hover:text-green-900">Pengumuman</Link>
                                <Link href={route('content.about-us')} className="text-gray-700 hover:text-green-900">Tentang Kami</Link>
                                <div className="relative group">
                                    <span className="text-gray-700 hover:text-green-900 cursor-pointer">Profil</span>
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <Link href={route('content.study-programs')} className="block px-4 py-2 text-gray-700 hover:bg-green-50">Profil Program Studi</Link>
                                        <Link href={route('content.lecturers')} className="block px-4 py-2 text-gray-700 hover:bg-green-50">Profil Dosen</Link>
                                    </div>
                                </div>
                                <Link href={route('content.contact')} className="text-gray-700 hover:text-green-900">Kontak Kami</Link>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <Link href={route('login')}>
                                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                                        Admin Login
                                    </Button>
                                </Link>
                                <Link href={route('register')}>
                                    <Button className="bg-green-600 hover:bg-green-700">
                                        Alumni Login
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                🏛️ Selamat Datang di 
                                <span className="text-green-600"> Campus Website</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Portal resmi kampus untuk informasi akademik, pengumuman terbaru, 
                                dan sistem study tracer alumni. Terhubung dengan masa depan pendidikan.
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-white rounded-lg p-6 shadow-md border border-green-100">
                                    <div className="text-3xl mb-4">📢</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengumuman Terbaru</h3>
                                    <p className="text-gray-600 text-sm">Dapatkan informasi terkini tentang kegiatan akademik dan kampus</p>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-md border border-green-100">
                                    <div className="text-3xl mb-4">👨‍🏫</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Profil Lengkap</h3>
                                    <p className="text-gray-600 text-sm">Informasi program studi dan profil dosen berkualitas</p>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-md border border-green-100">
                                    <div className="text-3xl mb-4">📊</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Tracer</h3>
                                    <p className="text-gray-600 text-sm">Sistem pelacakan alumni untuk monitoring karier lulusan</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={route('announcements.index')}>
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                                        📢 Lihat Pengumuman
                                    </Button>
                                </Link>
                                <Link href={route('content.about-us')}>
                                    <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8">
                                        ℹ️ Tentang Kami
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ Fitur Utama</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Platform terpadu yang menghubungkan civitas akademika dengan informasi dan layanan kampus
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Info Akademik</h3>
                                <p className="text-gray-600">Program studi terkini dengan kurikulum yang relevan dengan industri</p>
                            </div>
                            
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">👥</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Komunitas Alumni</h3>
                                <p className="text-gray-600">Jaringan alumni yang kuat dengan sistem pelacakan karier</p>
                            </div>
                            
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Akses Mudah</h3>
                                <p className="text-gray-600">Interface modern dan responsif untuk kemudahan akses informasi</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section for Alumni */}
                <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            🎓 Khusus Alumni
                        </h2>
                        <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
                            Bergabunglah dengan sistem study tracer untuk membantu kampus memantau 
                            perkembangan karier alumni dan meningkatkan kualitas pendidikan
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={route('register')}>
                                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
                                    📝 Daftar Sebagai Alumni
                                </Button>
                            </Link>
                            <Link href={route('study-tracer.index')}>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800 px-8">
                                    📊 Akses Study Tracer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">🎓</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Campus</h3>
                                </div>
                                <p className="text-gray-400">Portal resmi kampus untuk civitas akademika</p>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Menu Utama</h4>
                                <div className="space-y-2">
                                    <Link href={route('home')} className="block text-gray-400 hover:text-white">Beranda</Link>
                                    <Link href={route('announcements.index')} className="block text-gray-400 hover:text-white">Pengumuman</Link>
                                    <Link href={route('content.about-us')} className="block text-gray-400 hover:text-white">Tentang Kami</Link>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Profil</h4>
                                <div className="space-y-2">
                                    <Link href={route('content.study-programs')} className="block text-gray-400 hover:text-white">Program Studi</Link>
                                    <Link href={route('content.lecturers')} className="block text-gray-400 hover:text-white">Dosen</Link>
                                    <Link href={route('content.contact')} className="block text-gray-400 hover:text-white">Kontak</Link>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Alumni</h4>
                                <div className="space-y-2">
                                    <Link href={route('study-tracer.index')} className="block text-gray-400 hover:text-white">Study Tracer</Link>
                                    <Link href={route('register')} className="block text-gray-400 hover:text-white">Registrasi</Link>
                                    <Link href={route('login')} className="block text-gray-400 hover:text-white">Login</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                            <p className="text-gray-400">
                                © 2024 Campus Website. Built with Laravel & Inertia.js
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}