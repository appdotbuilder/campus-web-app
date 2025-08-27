<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ContentPage;
use Inertia\Inertia;

class ContentPageController extends Controller
{
    /**
     * Display the About Us page.
     */
    public function show(string $key)
    {
        $pageMapping = [
            'about-us' => [
                'title' => 'Tentang Kami',
                'template' => 'content/about-us'
            ],
            'study-programs' => [
                'title' => 'Profil Program Studi', 
                'template' => 'content/study-programs'
            ],
            'lecturers' => [
                'title' => 'Profil Dosen',
                'template' => 'content/lecturers'
            ],
            'contact' => [
                'title' => 'Kontak Kami',
                'template' => 'content/contact'
            ]
        ];

        if (!isset($pageMapping[$key])) {
            abort(404);
        }

        $page = ContentPage::findByKey($key) ?? new ContentPage([
            'title' => $pageMapping[$key]['title'],
            'content' => 'Halaman ini sedang dalam pengembangan.'
        ]);
        
        return Inertia::render($pageMapping[$key]['template'], [
            'page' => $page
        ]);
    }
}