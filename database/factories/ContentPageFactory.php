<?php

namespace Database\Factories;

use App\Models\ContentPage;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContentPage>
 */
class ContentPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\ContentPage>
     */
    protected $model = ContentPage::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'key' => fake()->unique()->slug(),
            'title' => fake()->sentence(4, true),
            'content' => fake()->paragraphs(5, true),
            'metadata' => null,
            'is_active' => fake()->boolean(90), // 90% chance of being active
            'updated_by' => User::factory()->state(['role' => 'admin']),
        ];
    }

    /**
     * Indicate that the content page is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => true,
        ]);
    }

    /**
     * Indicate that the content page is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}