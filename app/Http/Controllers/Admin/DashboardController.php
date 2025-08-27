<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\StudyTracer;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{


    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'total_announcements' => Announcement::count(),
            'published_announcements' => Announcement::published()->count(),
            'total_alumni' => User::alumni()->count(),
            'total_study_tracers' => StudyTracer::count(),
        ];

        $recentAnnouncements = Announcement::with('creator:id,name')
            ->latest()
            ->take(5)
            ->get();

        $recentStudyTracers = StudyTracer::with('user:id,name')
            ->latest('submitted_at')
            ->take(5)
            ->get();
        
        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recentAnnouncements' => $recentAnnouncements,
            'recentStudyTracers' => $recentStudyTracers,
        ]);
    }
}