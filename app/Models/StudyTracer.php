<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\StudyTracer
 *
 * @property int $id
 * @property int $user_id
 * @property string $full_name
 * @property string $student_id
 * @property string $graduation_year
 * @property string $study_program
 * @property string|null $current_occupation
 * @property string|null $company_name
 * @property string|null $job_description
 * @property string $employment_status
 * @property float|null $salary_range
 * @property string|null $feedback
 * @property array|null $additional_data
 * @property \Illuminate\Support\Carbon $submitted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer query()
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereAdditionalData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereCompanyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereCurrentOccupation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereEmploymentStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereFeedback($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereGraduationYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereJobDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereSalaryRange($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereStudentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereStudyProgram($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereSubmittedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StudyTracer whereUserId($value)
 * @method static \Database\Factories\StudyTracerFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class StudyTracer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'full_name',
        'student_id',
        'graduation_year',
        'study_program',
        'current_occupation',
        'company_name',
        'job_description',
        'employment_status',
        'salary_range',
        'feedback',
        'additional_data',
        'submitted_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'salary_range' => 'decimal:2',
        'additional_data' => 'array',
        'submitted_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'submitted_at',
    ];

    /**
     * Get the alumni user who submitted this tracer.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if the tracer was submitted by the given user.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function isSubmittedBy(User $user): bool
    {
        return $this->user_id === $user->id;
    }
}