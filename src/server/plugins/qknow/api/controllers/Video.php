<?php namespace Qknow\Api\Controllers;

use DB;
use BackendMenu;
use Backend\Classes\Controller;

/**
 * Video Back-end Controller
 */
class Video extends Controller
{
    public $implement = [
        'Mohsin.Rest.Behaviors.RestController'
    ];

    public $restConfig = 'config_rest.yaml';
    public function index(){
       // DB::enableQueryLog();
        echo \Qknow\Api\Models\Video::find(1)->hasOneProperty;
        //这里为查询操作
       // print_r(DB::getQueryLog());
    }
}