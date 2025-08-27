<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of announcements.
     */
    public function index()
    {
        $announcements = Announcement::published()
            ->latest('published_at')
            ->with('creator:id,name')
            ->paginate(10);
        
        return Inertia::render('announcements/index', [
            'announcements' => $announcements
        ]);
    }

    /**
     * Display the specified announcement.
     */
    public function show(string $slug)
    {
        $announcement = Announcement::published()
            ->where('slug', $slug)
            ->with('creator:id,name')
            ->firstOrFail();
        
        return Inertia::render('announcements/show', [
            'announcement' => $announcement
        ]);
    }
}