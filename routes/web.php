<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\ContentPageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\StudyTracerController;
use App\Http\Controllers\Admin\AnnouncementController as AdminAnnouncementController;
use App\Http\Controllers\Admin\ContentPageController as AdminContentPageController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\StudyTracerController as AdminStudyTracerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('home');

// Announcement routes
Route::controller(AnnouncementController::class)->group(function () {
    Route::get('/pengumuman', 'index')->name('announcements.index');
    Route::get('/pengumuman/{slug}', 'show')->name('announcements.show');
});

// Content page routes
Route::get('/tentang-kami', [ContentPageController::class, 'show'])->defaults('key', 'about-us')->name('content.about-us');
Route::get('/profil/program-studi', [ContentPageController::class, 'show'])->defaults('key', 'study-programs')->name('content.study-programs');
Route::get('/profil/dosen', [ContentPageController::class, 'show'])->defaults('key', 'lecturers')->name('content.lecturers');
Route::get('/kontak-kami', [ContentPageController::class, 'show'])->defaults('key', 'contact')->name('content.contact');

// Study Tracer routes (requires alumni authentication)
Route::middleware(['auth', 'verified'])->controller(StudyTracerController::class)->group(function () {
    Route::get('/study-tracer', 'index')->name('study-tracer.index');
    Route::post('/study-tracer', 'store')->name('study-tracer.store');
});

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        /** @var \App\Models\User $user */
        $user = auth()->user();

        if ($user->isAdmin()) {
            return redirect()->route('admin.dashboard');
        }

        $studyTracer = \App\Models\StudyTracer::where('user_id', $user->id)->first();
        $latestAnnouncements = \App\Models\Announcement::published()->latest('published_at')->take(3)->get();

        return Inertia::render('dashboard', [
            'user' => $user->only('id', 'name', 'email', 'student_id', 'graduation_year', 'study_program'),
            'studyTracer' => $studyTracer,
            'latestAnnouncements' => $latestAnnouncements,
        ]);
    })->name('dashboard');
});

// Admin routes
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
    
    // Announcement management
    Route::resource('announcements', AdminAnnouncementController::class);
    
    // Content page management
    Route::resource('content-pages', AdminContentPageController::class)->except(['create', 'store', 'destroy']);
    
    // Study tracer management
    Route::resource('study-tracers', AdminStudyTracerController::class)->only(['index', 'show']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';