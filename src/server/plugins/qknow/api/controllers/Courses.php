<?php namespace Qknow\Api\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Qknow\Api\Models\Course;



/**
 * Courses Back-end Controller
 */
class Courses extends Controller
{
    public $implement = [
        'Mohsin.Rest.Behaviors.RestController'
    ];

    public $restConfig = 'config_rest.yaml';
    public function index(){
        $data = Course::getAllCourse();
        return [
            "meta"=>[
                "code"=>200,
                "message"=>"请求成功",
                "server_time"=>time()
            ],
            "data"=>$data
        ];
    }

    public function show($id)
    {
        $data = Course::getCourseByCourseTypeId($id);
        return [
            "meta"=>[
                "code"=>200,
                "message"=>"请求成功",
                "server_time"=>time()
            ],
            "data"=>$data
        ];
    }

    public function showCourse($id)
    {
        $data = Course::getCourseById($id);
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
