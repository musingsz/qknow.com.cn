<?php namespace Qknow\Api\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Qknow\Api\Models\CourseType;

/**
 * Course Types Back-end Controller
 */
class CourseTypes extends Controller
{
    public $implement = [
        'Mohsin.Rest.Behaviors.RestController'
    ];

    public $restConfig = 'config_rest.yaml';
    public function index(){
        $data = CourseType::getAllCourseType();
        return [
            "meta"=>[
                "code"=>200,
                "message"=>"请求成功",
                "server_time"=>time()
            ],
            "data"=>$data
        ];
    }
}