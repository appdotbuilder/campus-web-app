import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Announcement {
    id: number;
    title: string;
    content: string;
    slug: string;
    published_at: string;
    creator: {
        id: number;
        name: string;
    };
}

interface Props {
    announcements: {
        data: Announcement[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    [key: string]: unknown;
}

export default function AnnouncementsIndex({ announcements }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getExcerpt = (content: string, length = 200) => {
        const textContent = content.replace(/<[^>]*>/g, '');
        return textContent.length > length ? textContent.substring(0, length) + '...' : textContent;
    };

    return (
        <>
            <Head title="Pengumuman - Campus Website" />
            
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
                                <Link href={route('announcements.index')} className="text-green-700 hover:text-green-900 font-medium">Pengumuman</Link>
                                <Link href={route('content.about-us')} className="text-gray-700 hover:text-green-900">Tentang Kami</Link>
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

                {/* Main Content */}
                <main className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Page Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    📢 Pengumuman Resmi
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Informasi terbaru dan penting dari kampus
                                </p>
                            </div>

                            {/* Announcements List */}
                            <div className="space-y-8">
                                {announcements.data.length > 0 ? (
                                    announcements.data.map((announcement) => (
                                        <article key={announcement.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                            <span className="text-green-600 text-xl">📢</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                                            <span className="font-medium text-green-600">
                                                                {formatDate(announcement.published_at)}
                                                            </span>
                                                            <span>•</span>
                                                            <span>oleh {announcement.creator.name}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors">
                                                    <Link href={route('announcements.show', announcement.slug)}>
                                                        {announcement.title}
                                                    </Link>
                                                </h2>

                                                <div className="text-gray-700 mb-6 leading-relaxed">
                                                    <p>{getExcerpt(announcement.content)}</p>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <Link href={route('announcements.show', announcement.slug)}>
                                                        <Button className="bg-green-600 hover:bg-green-700">
                                                            Baca Selengkapnya
                                                        </Button>
                                                    </Link>
                                                    
                                                    <div className="text-sm text-gray-500">
                                                        #{announcement.id}
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="text-6xl mb-4">📭</div>
                                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                            Belum Ada Pengumuman
                                        </h3>
                                        <p className="text-gray-500">
                                            Saat ini belum ada pengumuman yang dipublikasikan.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Pagination */}
                            {announcements.last_page > 1 && (
                                <div className="mt-12 flex justify-center">
                                    <nav className="flex items-center space-x-2">
                                        {announcements.links.map((link, index) => (
                                            <div key={index}>
                                                {link.url ? (
                                                    <Link
                                                        href={link.url}
                                                        className={`px-3 py-2 text-sm rounded-md transition-colors ${
                                                            link.active
                                                                ? 'bg-green-600 text-white'
                                                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-50'
                                                        }`}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                ) : (
                                                    <span
                                                        className="px-3 py-2 text-sm text-gray-400"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                </div>
                            )}

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
        </>
    );
}