<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\ContentPage;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $latestAnnouncements = Announcement::published()
            ->latest('published_at')
            ->take(3)
            ->get();

        $aboutUs = ContentPage::findByKey('about-us');
        
        return Inertia::render('home', [
            'latestAnnouncements' => $latestAnnouncements,
            'aboutUsContent' => $aboutUs ? $aboutUs->content : '',
        ]);
    }
}