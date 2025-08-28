import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import Heading from '@/components/heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icon';
import { FileText, Megaphone, CheckCircle, ArrowRight, Calendar, User } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    student_id?: string;
    graduation_year?: string;
    study_program?: string;
}

interface Announcement {
    id: number;
    title: string;
    content: string;
    slug: string;
    published_at: string;
    creator: {
        name: string;
    };
}

interface StudyTracer {
    id: number;
    full_name: string;
    student_id: string;
    graduation_year: string;
    study_program: string;
    current_occupation?: string;
    employment_status: string;
    submitted_at: string;
}

interface Props {
    user: User;
    studyTracer?: StudyTracer;
    latestAnnouncements: Announcement[];
    [key: string]: unknown;
}

export default function Dashboard({ user, studyTracer, latestAnnouncements }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getExcerpt = (content: string, length = 100) => {
        const textContent = content.replace(/<[^>]*>/g, '');
        return textContent.length > length ? textContent.substring(0, length) + '...' : textContent;
    };

    return (
        <AppShell>
            <Head title="Dashboard Alumni" />

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Heading
                    title={`Selamat Datang, ${user.name}! 👋`}
                    description="Pantau informasi kampus dan kelola data alumni Anda."
                />

                {/* User Info Card */}
                <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                    <CardHeader>
                        <CardTitle className="flex items-center text-green-800">
                            <Icon iconNode={User} className="h-5 w-5 mr-2" />
                            Informasi Alumni
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm font-medium text-green-700">NIM</p>
                                <p className="text-green-900">{user.student_id || 'Belum diisi'}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-green-700">Tahun Lulus</p>
                                <p className="text-green-900">{user.graduation_year || 'Belum diisi'}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-green-700">Program Studi</p>
                                <p className="text-green-900">{user.study_program || 'Belum diisi'}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Study Tracer Card */}
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-semibold text-blue-800 flex items-center">
                                <Icon iconNode={FileText} className="h-5 w-5 mr-2" />
                                Study Tracer Alumni 📊
                            </CardTitle>
                            {studyTracer && (
                                <Badge className="bg-green-600 hover:bg-green-700 text-white">
                                    <Icon iconNode={CheckCircle} className="h-3 w-3 mr-1" />
                                    Sudah Mengisi
                                </Badge>
                            )}
                        </CardHeader>
                        <CardContent className="mt-4">
                            {studyTracer ? (
                                <div className="space-y-4">
                                    <div className="p-3 bg-white rounded-lg border">
                                        <p className="text-sm text-blue-800 flex items-center mb-2">
                                            <Icon iconNode={Calendar} className="h-4 w-4 mr-2" />
                                            Tanggal Pengisian
                                        </p>
                                        <p className="font-semibold text-blue-900">
                                            {formatDate(studyTracer.submitted_at)}
                                        </p>
                                    </div>
                                    
                                    {studyTracer.current_occupation && (
                                        <div className="p-3 bg-white rounded-lg border">
                                            <p className="text-sm text-blue-800 mb-2">Pekerjaan Saat Ini</p>
                                            <p className="font-semibold text-blue-900">
                                                {studyTracer.current_occupation}
                                            </p>
                                        </div>
                                    )}
                                    
                                    <div className="p-3 bg-white rounded-lg border">
                                        <p className="text-sm text-blue-800 mb-2">Status Pekerjaan</p>
                                        <p className="font-semibold text-blue-900 capitalize">
                                            {studyTracer.employment_status}
                                        </p>
                                    </div>
                                    
                                    <Link href={route('study-tracer.index')}>
                                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                                            <Icon iconNode={ArrowRight} className="h-4 w-4 mr-2" />
                                            Lihat & Edit Detail
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="text-center py-6">
                                        <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Icon iconNode={FileText} className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <p className="text-blue-800 mb-2 font-medium">
                                            Belum Mengisi Study Tracer
                                        </p>
                                        <p className="text-sm text-blue-600 mb-4">
                                            Partisipasi Anda sangat penting bagi pengembangan kampus! 
                                            Bantu kami melacak perkembangan karir alumni.
                                        </p>
                                    </div>
                                    
                                    <Link href={route('study-tracer.index')}>
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                            <Icon iconNode={FileText} className="h-4 w-4 mr-2" />
                                            Isi Form Study Tracer Sekarang
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Latest Announcements Card */}
                    <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-semibold text-emerald-800 flex items-center">
                                <Icon iconNode={Megaphone} className="h-5 w-5 mr-2" />
                                Pengumuman Terbaru 📢
                            </CardTitle>
                            <Button variant="outline" size="sm" asChild className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                                <Link href={route('announcements.index')}>
                                    <Icon iconNode={ArrowRight} className="h-4 w-4 mr-2" />
                                    Lihat Semua
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent className="mt-4">
                            {latestAnnouncements.length > 0 ? (
                                <div className="space-y-4">
                                    {latestAnnouncements.map((announcement) => (
                                        <div key={announcement.id} className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                                            <Link href={route('announcements.show', announcement.slug)} className="block">
                                                <h4 className="font-semibold text-emerald-900 hover:text-emerald-700 transition-colors mb-2">
                                                    {announcement.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                    {getExcerpt(announcement.content, 120)}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-xs text-emerald-600 flex items-center">
                                                        <Icon iconNode={Calendar} className="h-3 w-3 mr-1" />
                                                        {formatDate(announcement.published_at)}
                                                    </p>
                                                    <span className="text-xs text-emerald-600 font-medium">
                                                        Baca selengkapnya →
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <Icon iconNode={Megaphone} className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <p className="text-emerald-700 font-medium mb-2">Belum Ada Pengumuman</p>
                                    <p className="text-sm text-emerald-600">Tidak ada pengumuman terbaru saat ini.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="text-gray-800">Aksi Cepat ⚡</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link href={route('announcements.index')}>
                                <Button variant="outline" className="w-full h-auto p-4 justify-start">
                                    <Icon iconNode={Megaphone} className="h-5 w-5 mr-3" />
                                    <div className="text-left">
                                        <p className="font-semibold">Lihat Pengumuman</p>
                                        <p className="text-xs text-gray-500">Informasi terbaru kampus</p>
                                    </div>
                                </Button>
                            </Link>
                            
                            <Link href={route('content.about-us')}>
                                <Button variant="outline" className="w-full h-auto p-4 justify-start">
                                    <Icon iconNode={User} className="h-5 w-5 mr-3" />
                                    <div className="text-left">
                                        <p className="font-semibold">Tentang Kampus</p>
                                        <p className="text-xs text-gray-500">Informasi institusi</p>
                                    </div>
                                </Button>
                            </Link>
                            
                            <Link href={route('content.contact')}>
                                <Button variant="outline" className="w-full h-auto p-4 justify-start">
                                    <Icon iconNode={Calendar} className="h-5 w-5 mr-3" />
                                    <div className="text-left">
                                        <p className="font-semibold">Kontak Kami</p>
                                        <p className="text-xs text-gray-500">Hubungi kampus</p>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppShell>
    );
}