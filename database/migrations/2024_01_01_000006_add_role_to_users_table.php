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
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['admin', 'alumni'])->default('alumni')->after('email');
            $table->string('student_id')->nullable()->after('role');
            $table->string('graduation_year', 4)->nullable()->after('student_id');
            $table->string('study_program')->nullable()->after('graduation_year');
            
            // Add indexes
            $table->index('role');
            $table->index('student_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['role']);
            $table->dropIndex(['student_id']);
            $table->dropColumn(['role', 'student_id', 'graduation_year', 'study_program']);
        });
    }
};