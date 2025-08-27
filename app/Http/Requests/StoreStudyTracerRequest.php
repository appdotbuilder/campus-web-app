<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudyTracerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()?->isAlumni() ?? false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'student_id' => 'required|string|max:50',
            'graduation_year' => 'required|digits:4|integer|min:1990|max:' . (date('Y') + 1),
            'study_program' => 'required|string|max:255',
            'current_occupation' => 'nullable|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'job_description' => 'nullable|string',
            'employment_status' => 'required|in:employed,unemployed,self-employed,student,other',
            'salary_range' => 'nullable|numeric|min:0',
            'feedback' => 'nullable|string',
            'additional_data' => 'nullable|array',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'full_name.required' => 'Nama lengkap harus diisi.',
            'student_id.required' => 'NIM harus diisi.',
            'graduation_year.required' => 'Tahun kelulusan harus diisi.',
            'graduation_year.digits' => 'Tahun kelulusan harus terdiri dari 4 digit.',
            'graduation_year.min' => 'Tahun kelulusan tidak valid.',
            'graduation_year.max' => 'Tahun kelulusan tidak valid.',
            'study_program.required' => 'Program studi harus diisi.',
            'employment_status.required' => 'Status pekerjaan harus dipilih.',
            'employment_status.in' => 'Status pekerjaan tidak valid.',
            'salary_range.numeric' => 'Gaji harus berupa angka.',
            'salary_range.min' => 'Gaji tidak boleh bernilai negatif.',
        ];
    }
}