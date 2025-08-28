import React from 'react';
import { Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import Heading from '@/components/heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Megaphone, 
    CheckCircle, 
    Users, 
    FileText, 
    ArrowRight, 
    User, 
    Plus, 
    Edit 
} from 'lucide-react';
import { Icon } from '@/components/ui/icon';

interface User {
    id: number;
    name: string;
    [key: string]: unknown;
}

interface Announcement {
    id: number;
    title: string;
    created_at: string;
    creator: User;
    is_published: boolean;
    [key: string]: unknown;
}

interface StudyTracer {
    id: number;
    full_name: string;
    student_id: string;
    submitted_at: string;
    user: User;
    [key: string]: unknown;
}

interface Stats {
    total_announcements: number;
    published_announcements: number;
    total_alumni: number;
    total_study_tracers: number;
    [key: string]: unknown;
}

interface Props {
    stats: Stats;
    recentAnnouncements: Announcement[];
    recentStudyTracers: StudyTracer[];
    [key: string]: unknown;
}

export default function AdminDashboard({ stats, recentAnnouncements, recentStudyTracers }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const formatDateTime = (dateString: string) => {
        return new Date(dateString).toLocaleString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <AppShell>
            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <div className="mb-8">
                    <Heading 
                        title="📊 Dashboard Admin" 
                        description="Kelola sistem alumni dan pengumuman dengan mudah" 
                    />
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-emerald-700">
                                📢 Total Pengumuman
                            </CardTitle>
                            <Icon iconNode={Megaphone} className="h-4 w-4 text-emerald-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-800">
                                {stats.total_announcements.toLocaleString('id-ID')}
                            </div>
                            <p className="text-xs text-emerald-600 mt-1">
                                Semua pengumuman yang dibuat
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-green-700">
                                ✅ Pengumuman Dipublikasi
                            </CardTitle>
                            <Icon iconNode={CheckCircle} className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-800">
                                {stats.published_announcements.toLocaleString('id-ID')}
                            </div>
                            <p className="text-xs text-green-600 mt-1">
                                Pengumuman yang aktif
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-blue-700">
                                🎓 Total Alumni
                            </CardTitle>
                            <Icon iconNode={Users} className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-800">
                                {stats.total_alumni.toLocaleString('id-ID')}
                            </div>
                            <p className="text-xs text-blue-600 mt-1">
                                Pengguna alumni terdaftar
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-purple-700">
                                📋 Study Tracer Terkirim
                            </CardTitle>
                            <Icon iconNode={FileText} className="h-4 w-4 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-800">
                                {stats.total_study_tracers.toLocaleString('id-ID')}
                            </div>
                            <p className="text-xs text-purple-600 mt-1">
                                Data tracer alumni
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Announcements */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg">📢 Pengumuman Terbaru</CardTitle>
                                    <CardDescription>
                                        5 pengumuman yang baru dibuat
                                    </CardDescription>
                                </div>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="/admin/announcements">
                                        <Icon iconNode={ArrowRight} className="h-4 w-4 mr-2" />
                                        Lihat Semua
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentAnnouncements.length > 0 ? (
                                    recentAnnouncements.map((announcement) => (
                                        <div key={announcement.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {announcement.title}
                                                </p>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <p className="text-xs text-gray-500">
                                                        Oleh {announcement.creator.name}
                                                    </p>
                                                    <span className="text-xs text-gray-400">•</span>
                                                    <p className="text-xs text-gray-500">
                                                        {formatDate(announcement.created_at)}
                                                    </p>
                                                </div>
                                                <div className="mt-1">
                                                    <Badge 
                                                        variant={announcement.is_published ? "default" : "secondary"}
                                                        className="text-xs"
                                                    >
                                                        {announcement.is_published ? 'Dipublikasi' : 'Draft'}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <Icon iconNode={Megaphone} className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                                        <p className="text-gray-500 text-sm">Belum ada pengumuman yang dibuat</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Study Tracers */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg">📋 Study Tracer Terbaru</CardTitle>
                                    <CardDescription>
                                        5 data tracer alumni yang baru masuk
                                    </CardDescription>
                                </div>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="/admin/study-tracers">
                                        <Icon iconNode={ArrowRight} className="h-4 w-4 mr-2" />
                                        Lihat Semua
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentStudyTracers.length > 0 ? (
                                    recentStudyTracers.map((tracer) => (
                                        <div key={tracer.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                                <Icon iconNode={User} className="h-4 w-4 text-purple-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900">
                                                    {tracer.full_name}
                                                </p>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <p className="text-xs text-gray-500">
                                                        NIM: {tracer.student_id}
                                                    </p>
                                                    <span className="text-xs text-gray-400">•</span>
                                                    <p className="text-xs text-gray-500">
                                                        {formatDateTime(tracer.submitted_at)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <Icon iconNode={FileText} className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                                        <p className="text-gray-500 text-sm">Belum ada data study tracer yang masuk</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="text-lg">🚀 Tindakan Cepat</CardTitle>
                        <CardDescription>
                            Aksi yang sering dilakukan untuk mengelola sistem
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Button className="h-auto p-4 flex flex-col items-center space-y-2" asChild>
                                <Link href="/admin/announcements/create">
                                    <Icon iconNode={Plus} className="h-5 w-5" />
                                    <span className="text-sm">Buat Pengumuman</span>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" asChild>
                                <Link href="/admin/announcements">
                                    <Icon iconNode={Megaphone} className="h-5 w-5" />
                                    <span className="text-sm">Kelola Pengumuman</span>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" asChild>
                                <Link href="/admin/study-tracers">
                                    <Icon iconNode={FileText} className="h-5 w-5" />
                                    <span className="text-sm">Lihat Study Tracer</span>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" asChild>
                                <Link href="/admin/content-pages">
                                    <Icon iconNode={Edit} className="h-5 w-5" />
                                    <span className="text-sm">Edit Konten Halaman</span>
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppShell>
    );
}