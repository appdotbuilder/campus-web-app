<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateContentPageRequest;
use App\Models\ContentPage;
use Inertia\Inertia;

class ContentPageController extends Controller
{


    /**
     * Display a listing of content pages.
     */
    public function index()
    {
        $pages = ContentPage::with('updater:id,name')
            ->latest('updated_at')
            ->get();
        
        return Inertia::render('admin/content-pages/index', [
            'pages' => $pages
        ]);
    }

    /**
     * Display the specified content page.
     */
    public function show(ContentPage $contentPage)
    {
        $contentPage->load('updater:id,name');
        
        return Inertia::render('admin/content-pages/show', [
            'page' => $contentPage
        ]);
    }

    /**
     * Show the form for editing the specified content page.
     */
    public function edit(ContentPage $contentPage)
    {
        return Inertia::render('admin/content-pages/edit', [
            'page' => $contentPage
        ]);
    }

    /**
     * Update the specified content page.
     */
    public function update(UpdateContentPageRequest $request, ContentPage $contentPage)
    {
        $data = $request->validated();
        $data['updated_by'] = auth()->id();

        $contentPage->update($data);

        return redirect()->route('admin.content-pages.show', $contentPage)
            ->with('success', 'Halaman konten berhasil diperbarui.');
    }
}