import React from 'react';
import { Head, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface User {
    id: number;
    name: string;
    email: string;
    student_id?: string;
    graduation_year?: string;
    study_program?: string;
}

interface StudyTracer {
    id: number;
    full_name: string;
    student_id: string;
    graduation_year: string;
    study_program: string;
    current_occupation?: string;
    company_name?: string;
    job_description?: string;
    employment_status: string;
    salary_range?: number;
    feedback?: string;
    submitted_at: string;
}

interface Props {
    user: User;
    studyTracer?: StudyTracer;
    [key: string]: unknown;
}

export default function StudyTracerIndex({ user, studyTracer }: Props) {
    const [formData, setFormData] = React.useState({
        full_name: studyTracer?.full_name || user.name || '',
        student_id: studyTracer?.student_id || user.student_id || '',
        graduation_year: studyTracer?.graduation_year || user.graduation_year || '',
        study_program: studyTracer?.study_program || user.study_program || '',
        current_occupation: studyTracer?.current_occupation || '',
        company_name: studyTracer?.company_name || '',
        job_description: studyTracer?.job_description || '',
        employment_status: studyTracer?.employment_status || '',
        salary_range: studyTracer?.salary_range ? studyTracer.salary_range.toString() : '',
        feedback: studyTracer?.feedback || '',
    });

    const [processing, setProcessing] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        
        router.post(route('study-tracer.store'), formData, {
            onFinish: () => setProcessing(false),
        });
    };

    const formatCurrency = (value: string) => {
        const numValue = value.replace(/[^\d]/g, '');
        return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatCurrency(e.target.value);
        setFormData(prev => ({ ...prev, salary_range: formatted }));
    };

    if (studyTracer) {
        return (
            <>
                <Head title="Study Tracer - Data Anda" />
                
                <div className="min-h-screen bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    📊 Study Tracer Data
                                </h1>
                                <p className="text-gray-600">
                                    Berikut adalah data study tracer yang telah Anda kirimkan
                                </p>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        ✅ Data Terkirim
                                        <span className="text-sm font-normal text-green-600">
                                            Dikirim pada: {new Date(studyTracer.submitted_at).toLocaleDateString('id-ID')}
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="font-semibold">Nama Lengkap</Label>
                                            <p className="text-gray-700">{studyTracer.full_name}</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">NIM</Label>
                                            <p className="text-gray-700">{studyTracer.student_id}</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">Tahun Lulus</Label>
                                            <p className="text-gray-700">{studyTracer.graduation_year}</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">Program Studi</Label>
                                            <p className="text-gray-700">{studyTracer.study_program}</p>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <h3 className="font-semibold text-lg mb-4">💼 Informasi Pekerjaan</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label className="font-semibold">Status Pekerjaan</Label>
                                                <p className="text-gray-700 capitalize">
                                                    {studyTracer.employment_status.replace('-', ' ')}
                                                </p>
                                            </div>
                                            {studyTracer.current_occupation && (
                                                <div>
                                                    <Label className="font-semibold">Pekerjaan Saat Ini</Label>
                                                    <p className="text-gray-700">{studyTracer.current_occupation}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-green-700">
                                            ✅ Terima kasih telah mengisi form study tracer! Data Anda sangat membantu 
                                            dalam evaluasi dan peningkatan kualitas program studi.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head title="Study Tracer Form" />
            
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                📊 Form Study Tracer Alumni
                            </h1>
                            <p className="text-gray-600">
                                Mohon isi data berikut untuk membantu kampus memantau perkembangan alumni
                            </p>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Informasi Alumni</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="full_name">Nama Lengkap *</Label>
                                            <Input
                                                id="full_name"
                                                type="text"
                                                value={formData.full_name}
                                                onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                                                required
                                                className="mt-1"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="student_id">NIM *</Label>
                                            <Input
                                                id="student_id"
                                                type="text"
                                                value={formData.student_id}
                                                onChange={(e) => setFormData(prev => ({ ...prev, student_id: e.target.value }))}
                                                required
                                                className="mt-1"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="graduation_year">Tahun Lulus *</Label>
                                            <Input
                                                id="graduation_year"
                                                type="number"
                                                min="1990"
                                                max="2025"
                                                value={formData.graduation_year}
                                                onChange={(e) => setFormData(prev => ({ ...prev, graduation_year: e.target.value }))}
                                                required
                                                className="mt-1"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="study_program">Program Studi *</Label>
                                            <Input
                                                id="study_program"
                                                type="text"
                                                value={formData.study_program}
                                                onChange={(e) => setFormData(prev => ({ ...prev, study_program: e.target.value }))}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold mb-4">💼 Informasi Pekerjaan</h3>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <Label htmlFor="employment_status">Status Pekerjaan *</Label>
                                                <select
                                                    id="employment_status"
                                                    value={formData.employment_status}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, employment_status: e.target.value }))}
                                                    required
                                                    className="mt-1 flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                                >
                                                    <option value="">Pilih status pekerjaan</option>
                                                    <option value="employed">Bekerja</option>
                                                    <option value="unemployed">Belum Bekerja</option>
                                                    <option value="self-employed">Wiraswasta</option>
                                                    <option value="student">Melanjutkan Studi</option>
                                                    <option value="other">Lainnya</option>
                                                </select>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="current_occupation">Pekerjaan Saat Ini</Label>
                                                    <Input
                                                        id="current_occupation"
                                                        type="text"
                                                        value={formData.current_occupation}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, current_occupation: e.target.value }))}
                                                        className="mt-1"
                                                        placeholder="Contoh: Software Engineer"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="company_name">Nama Perusahaan</Label>
                                                    <Input
                                                        id="company_name"
                                                        type="text"
                                                        value={formData.company_name}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
                                                        className="mt-1"
                                                        placeholder="Contoh: PT. Technology Indonesia"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <Label htmlFor="salary_range">Gaji per Bulan (Rupiah)</Label>
                                                <Input
                                                    id="salary_range"
                                                    type="text"
                                                    value={formData.salary_range}
                                                    onChange={handleSalaryChange}
                                                    className="mt-1"
                                                    placeholder="Contoh: 5.000.000"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="job_description">Deskripsi Pekerjaan</Label>
                                                <Textarea
                                                    id="job_description"
                                                    value={formData.job_description}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, job_description: e.target.value }))}
                                                    className="mt-1"
                                                    rows={3}
                                                    placeholder="Ceritakan tentang tanggung jawab dan aktivitas pekerjaan Anda"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold mb-4">💭 Feedback</h3>
                                        
                                        <div>
                                            <Label htmlFor="feedback">Saran dan Masukan untuk Program Studi</Label>
                                            <Textarea
                                                id="feedback"
                                                value={formData.feedback}
                                                onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                                                className="mt-1"
                                                rows={4}
                                                placeholder="Berikan feedback tentang program studi yang telah Anda tempuh"
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <Button 
                                            type="submit" 
                                            className="w-full bg-green-600 hover:bg-green-700" 
                                            disabled={processing}
                                        >
                                            {processing ? '📤 Mengirim...' : '📤 Kirim Form Study Tracer'}
                                        </Button>
                                        
                                        <p className="text-center text-sm text-gray-500 mt-4">
                                            * Data yang telah dikirim tidak dapat diubah. Pastikan semua informasi sudah benar.
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}