<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory;

    protected $fillable = ['id_transaksi', 'id_produk', 'quantity', 'harga'];
    protected $table = 'detail_transaksi';

    public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'id_transaksi');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_produk');
    }
}
