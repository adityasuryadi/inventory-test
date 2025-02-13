<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            $table->string('sport_type');
            $table->string('team_home');
            $table->string('team_away');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('matches');
    }
};
