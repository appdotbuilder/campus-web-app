<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudyTracerRequest;
use App\Models\StudyTracer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudyTracerController extends Controller
{


    /**
     * Display the study tracer form or submitted data.
     */
    public function index()
    {
        $user = auth()->user();
        
        if (!$user->isAlumni()) {
            abort(403, 'Unauthorized. Only alumni can access this page.');
        }

        $studyTracer = StudyTracer::where('user_id', $user->id)->first();
        
        return Inertia::render('study-tracer/index', [
            'studyTracer' => $studyTracer,
            'user' => $user
        ]);
    }

    /**
     * Store a newly created study tracer.
     */
    public function store(StoreStudyTracerRequest $request)
    {
        $user = auth()->user();
        
        if (!$user->isAlumni()) {
            abort(403, 'Unauthorized. Only alumni can submit study tracer forms.');
        }

        // Check if user already submitted a tracer
        $existingTracer = StudyTracer::where('user_id', $user->id)->first();
        if ($existingTracer) {
            return redirect()->route('study-tracer.index')
                ->with('error', 'Anda sudah mengisi form study tracer. Silakan hubungi admin jika perlu mengubah data.');
        }

        $data = $request->validated();
        $data['user_id'] = $user->id;
        $data['submitted_at'] = now();

        StudyTracer::create($data);

        return redirect()->route('study-tracer.index')
            ->with('success', 'Form study tracer berhasil dikirim. Terima kasih atas partisipasi Anda!');
    }
}