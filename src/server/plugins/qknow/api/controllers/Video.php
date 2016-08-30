<?php namespace Qknow\Api\Controllers;

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
        echo \Qknow\Api\Models\Video::all();
    }
}