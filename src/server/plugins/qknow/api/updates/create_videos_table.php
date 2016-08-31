<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateVideosTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_videos', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('parent_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->string('title', 50);
            $table->string('sub_title', 100);
            $table->string('URL', 50);
            $table->string('image', 50);
            $table->string('difficulty', 20);
            $table->smallInteger('time_length')->nullable();
            $table->smallInteger('list_order')->nullable();
            $table->boolean('display')->default(1);;
            $table->timestamps();
        });


    }

    public function down()
    {
        Schema::dropIfExists('qknow_videos');
    }
}
