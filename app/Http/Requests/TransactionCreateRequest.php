<?php

namespace App\Http\Requests;

use App\Rules\CheckStok;
use Illuminate\Foundation\Http\FormRequest;
use App\Models\Product;

class TransactionCreateRequest extends FormRequest
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
            'details' => 'required|array|min:1',
            'details.*.id_produk' => 'required|exists:products,id',
            'details.*.quantity' => [
                'required',
                'integer',
                'min:1',
                function ($attribute, $value, $fail) {
                    // Get the array index from the attribute name
                    preg_match('/details\.(\d+)\.quantity/', $attribute, $matches);
                    $index = $matches[1];

                    $id_produk = $this->input("details.{$index}.id_produk");
                    $product = Product::find($id_produk);
                    if ($product->stok < $value) {
                        $fail('Stok tidak cukup');
                    }
                },
            ],
        ];
    }

    public function messages()
    {
        return [
            'details.*.id_produk.required' => 'Product tidak boleh kosong.',
            'details.*.quantity.required' => 'Quantity tidak boleh kosong.',
            'details.*.quantity.integer' => 'Quantity harus angka',
            'details.*.quantity.min' => 'Quantity min 1',
        ];
    }
}
