<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateStatisticsTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_statistics', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('video_id')->unsigned();
            $table->decimal('score');
            $table->integer('sum')->unsigned();
            $table->smallInteger('list_order')->nullable();
            $table->boolean('display');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_statistics');
    }
}
