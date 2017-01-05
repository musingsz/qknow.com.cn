<?php namespace Qknow\Api\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use DB;
use Qknow\Api\Models\Video;

/**
 * Videos Back-end Controller
 */
class Videos extends Controller
{
    public $implement = [
        'Mohsin.Rest.Behaviors.RestController'
    ];

    public $restConfig = 'config_rest.yaml';

    public function show($id){
        $data = Video::getVideoById($id);
        $data_pre = Video::getVideoPreById($id);
        $data_next = Video::getVideoNextById($id);
        dd($data);
        return [
            "meta"=>[
            "code"=>200,
            "message"=>"请求成功",
            "server_time"=>time()
             ],
            "data"=>["data"=>$data,"pre"=>$data_pre[0],"next"=>$data_next[0]]
        ];

    }
}
