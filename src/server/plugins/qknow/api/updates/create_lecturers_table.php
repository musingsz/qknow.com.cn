<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateLecturersTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_api_lecturers', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_api_lecturers');
    }
}
