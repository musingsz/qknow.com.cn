<?php namespace Qknow\Api\Http;

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
        echo "index";
    }

}
