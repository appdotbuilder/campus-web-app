<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAnnouncementRequest;
use App\Http\Requests\UpdateAnnouncementRequest;
use App\Models\Announcement;
use Inertia\Inertia;

class AnnouncementController extends Controller
{


    /**
     * Display a listing of announcements.
     */
    public function index()
    {
        $announcements = Announcement::with('creator:id,name')
            ->latest()
            ->paginate(10);
        
        return Inertia::render('admin/announcements/index', [
            'announcements' => $announcements
        ]);
    }

    /**
     * Show the form for creating a new announcement.
     */
    public function create()
    {
        return Inertia::render('admin/announcements/create');
    }

    /**
     * Store a newly created announcement.
     */
    public function store(StoreAnnouncementRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = auth()->id();
        $data['published_at'] = $data['is_published'] ? now() : null;

        $announcement = Announcement::create($data);

        return redirect()->route('admin.announcements.show', $announcement)
            ->with('success', 'Pengumuman berhasil dibuat.');
    }

    /**
     * Display the specified announcement.
     */
    public function show(Announcement $announcement)
    {
        $announcement->load('creator:id,name');
        
        return Inertia::render('admin/announcements/show', [
            'announcement' => $announcement
        ]);
    }

    /**
     * Show the form for editing the specified announcement.
     */
    public function edit(Announcement $announcement)
    {
        return Inertia::render('admin/announcements/edit', [
            'announcement' => $announcement
        ]);
    }

    /**
     * Update the specified announcement.
     */
    public function update(UpdateAnnouncementRequest $request, Announcement $announcement)
    {
        $data = $request->validated();
        
        // Update published_at when publishing status changes
        if ($data['is_published'] && !$announcement->is_published) {
            $data['published_at'] = now();
        } elseif (!$data['is_published']) {
            $data['published_at'] = null;
        }

        $announcement->update($data);

        return redirect()->route('admin.announcements.show', $announcement)
            ->with('success', 'Pengumuman berhasil diperbarui.');
    }

    /**
     * Remove the specified announcement from storage.
     */
    public function destroy(Announcement $announcement)
    {
        $announcement->delete();

        return redirect()->route('admin.announcements.index')
            ->with('success', 'Pengumuman berhasil dihapus.');
    }
}