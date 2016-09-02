<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateCourseTypesTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_course_types', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('course_type_name', 20);
            $table->string('image', 50);
            $table->smallInteger('list_order')->nullable();
            $table->boolean('display')->default(1);;
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_course_types');
    }
}
