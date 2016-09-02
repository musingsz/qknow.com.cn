<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateCoursesTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_courses', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('course_type_id')->unsigned();
            $table->integer('lecturer_id')->unsigned();
            $table->integer('statistice_id')->unsigned();
            $table->string('title', 50);
            $table->string('sub_title', 100);
            $table->string('image', 50);
            $table->smallInteger('chapter_count');
            $table->smallInteger('time_length');
            $table->enum('difficulty', ["初级","中级","高级"]);
            $table->smallInteger('list_order')->nullable();
            $table->boolean('display')->default(1);;
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_courses');
    }
}
