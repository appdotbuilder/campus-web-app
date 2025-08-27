<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StudyTracer;
use Inertia\Inertia;

class StudyTracerController extends Controller
{


    /**
     * Display a listing of study tracers.
     */
    public function index()
    {
        $studyTracers = StudyTracer::with('user:id,name,email')
            ->latest('submitted_at')
            ->paginate(10);
        
        return Inertia::render('admin/study-tracers/index', [
            'studyTracers' => $studyTracers
        ]);
    }

    /**
     * Display the specified study tracer.
     */
    public function show(StudyTracer $studyTracer)
    {
        $studyTracer->load('user:id,name,email');
        
        return Inertia::render('admin/study-tracers/show', [
            'studyTracer' => $studyTracer
        ]);
    }
}