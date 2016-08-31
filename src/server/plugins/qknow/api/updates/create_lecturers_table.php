<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateLecturersTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_lecturers', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('good_id')->unsigned();
            $table->string('nickname', 20);
            $table->string('name', 20)->nullable();
            $table->boolean('sex');
            $table->string('company', 20)->nullable();
            $table->string('introduction', 100)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_lecturers');
    }
}
