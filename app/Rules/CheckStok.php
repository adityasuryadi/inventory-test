<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Product;

class CheckStok implements ValidationRule
{
    protected $productId;
    public function __construct(int $productId)
    {
        $this->productId = $productId;
    }
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $productId = $this->productId;
        $product = Product::find($productId);
        if ($product->stok < $value) {
            $fail('Stok habis');
        }
    }
}
