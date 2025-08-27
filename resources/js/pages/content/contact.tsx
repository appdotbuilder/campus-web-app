import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface ContentPage {
    id?: number;
    title: string;
    content: string;
    key?: string;
    is_active?: boolean;
}

interface Props {
    page: ContentPage;
    [key: string]: unknown;
}

export default function Contact({ page }: Props) {
    return (
        <>
            <Head title={`${page.title} - Campus Website`} />
            
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-green-100">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Link href={route('home')} className="flex items-center space-x-2">
                                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">🎓</span>
                                    </div>
                                    <h1 className="text-2xl font-bold text-green-800">Campus</h1>
                                </Link>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href={route('home')} className="text-gray-700 hover:text-green-900">Beranda</Link>
                                <Link href={route('announcements.index')} className="text-gray-700 hover:text-green-900">Pengumuman</Link>
                                <Link href={route('content.about-us')} className="text-gray-700 hover:text-green-900">Tentang Kami</Link>
                                <Link href={route('content.contact')} className="text-green-700 hover:text-green-900 font-medium">Kontak Kami</Link>
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

                {/* Main Content */}
                <main className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Page Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    📞 {page.title}
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Hubungi kami untuk informasi lebih lanjut
                                </p>
                            </div>

                            {/* Content */}
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                                <div className="p-8">
                                    <div 
                                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: page.content }}
                                    />
                                </div>
                            </div>

                            {/* Contact Cards */}
                            <div className="mt-12 grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <div className="text-center">
                                        <div className="text-3xl mb-4">💬</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Admisi & Pendaftaran</h3>
                                        <p className="text-gray-600 mb-4">Informasi program studi dan proses pendaftaran</p>
                                        <p className="text-green-600 font-medium">admisi@campus.ac.id</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <div className="text-center">
                                        <div className="text-3xl mb-4">📊</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Tracer Alumni</h3>
                                        <p className="text-gray-600 mb-4">Akses form study tracer untuk alumni</p>
                                        <Link href={route('study-tracer.index')}>
                                            <Button className="bg-green-600 hover:bg-green-700">
                                                Akses Study Tracer
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Back to Home */}
                            <div className="text-center mt-12">
                                <Link href={route('home')}>
                                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                                        ← Kembali ke Beranda
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .prose h2 { font-size: 1.5rem; font-weight: 600; color: #1f2937; margin: 2rem 0 1rem; }
                .prose h3 { font-size: 1.25rem; font-weight: 600; color: #374151; margin: 1.5rem 0 0.75rem; }
                .prose p { margin-bottom: 1rem; }
            `}} />
        </>
    );
}