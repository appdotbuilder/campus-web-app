<?php

namespace Database\Factories;

use App\Models\StudyTracer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudyTracer>
 */
class StudyTracerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\StudyTracer>
     */
    protected $model = StudyTracer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $employmentStatuses = ['employed', 'unemployed', 'self-employed', 'student', 'other'];
        $studyPrograms = ['Teknik Informatika', 'Sistem Informasi', 'Manajemen'];
        
        return [
            'user_id' => User::factory()->state(['role' => 'alumni']),
            'full_name' => fake()->name(),
            'student_id' => fake()->numerify('####-###'),
            'graduation_year' => fake()->year(),
            'study_program' => fake()->randomElement($studyPrograms),
            'current_occupation' => fake()->jobTitle(),
            'company_name' => fake()->company(),
            'job_description' => fake()->paragraph(),
            'employment_status' => fake()->randomElement($employmentStatuses),
            'salary_range' => fake()->numberBetween(3000000, 15000000), // IDR
            'feedback' => fake()->paragraphs(2, true),
            'additional_data' => null,
            'submitted_at' => fake()->dateTimeBetween('-6 months', 'now'),
        ];
    }

    /**
     * Indicate that the alumni is employed.
     */
    public function employed(): static
    {
        return $this->state(fn (array $attributes) => [
            'employment_status' => 'employed',
            'current_occupation' => fake()->jobTitle(),
            'company_name' => fake()->company(),
            'salary_range' => fake()->numberBetween(5000000, 15000000),
        ]);
    }

    /**
     * Indicate that the alumni is unemployed.
     */
    public function unemployed(): static
    {
        return $this->state(fn (array $attributes) => [
            'employment_status' => 'unemployed',
            'current_occupation' => null,
            'company_name' => null,
            'salary_range' => null,
        ]);
    }

    /**
     * Indicate that the alumni is self-employed.
     */
    public function selfEmployed(): static
    {
        return $this->state(fn (array $attributes) => [
            'employment_status' => 'self-employed',
            'current_occupation' => 'Entrepreneur',
            'company_name' => fake()->company() . ' (Own Business)',
            'salary_range' => fake()->numberBetween(3000000, 20000000),
        ]);
    }
}