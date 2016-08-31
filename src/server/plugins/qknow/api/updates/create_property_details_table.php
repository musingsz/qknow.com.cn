<?php namespace Qknow\Api\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreatePropertyDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('qknow_property_details', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('property_id')->unsigned();
            $table->string('name', 20);
            $table->smallInteger('list_order')->nullable();
            $table->boolean('display')->default(1);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('qknow_property_details');
    }
}
