<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('study_tracers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('full_name');
            $table->string('student_id');
            $table->string('graduation_year', 4);
            $table->string('study_program');
            $table->string('current_occupation')->nullable();
            $table->string('company_name')->nullable();
            $table->text('job_description')->nullable();
            $table->string('employment_status');
            $table->decimal('salary_range', 10, 2)->nullable();
            $table->text('feedback')->nullable();
            $table->json('additional_data')->nullable();
            $table->timestamp('submitted_at');
            $table->timestamps();
            
            // Add indexes for performance
            $table->index('user_id');
            $table->index('graduation_year');
            $table->index('study_program');
            $table->index('submitted_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('study_tracers');
    }
};