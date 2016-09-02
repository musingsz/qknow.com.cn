<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateChaptersTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_chapters', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('parent_id')->unsigned();
            $table->integer('course_id')->unsigned();
            $table->string('title', 50);
            $table->string('sub_title', 100)->nullable();
            $table->string('image', 50)->nullable();
            $table->smallInteger('time_length');
            $table->smallInteger('list_order')->nullable();
            $table->boolean('display')->default(1);;
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_chapters');
    }
}
