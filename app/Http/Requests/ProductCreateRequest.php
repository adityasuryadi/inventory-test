<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'produk' => 'required|unique:products',
            'stok' => 'required|numeric|min:1',
            'harga' => 'required|numeric|min:1'
        ];
    }

    public function messages()
    {
        return [
            'produk.unique' => 'Produk sudah ada',
            'produk.required' => 'Produk harus diisi',
            'stok.required' => 'Stok harus diisi',
            'stok.numeric' => 'Stok harus angka',
            'stok.min' => 'Stok minimal 1',
            'harga.required' => 'Harga harus diisi',
            'harga.numeric' => 'Harga harus angka',
            'harga.min' => 'Harga minimal 1'
        ];
    }
}
