<?php namespace Qknow\Api\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use DB;

/**
 * Videos Back-end Controller
 */
class Videos extends Controller
{
    public $implement = [
        'Mohsin.Rest.Behaviors.RestController'
    ];

    public $restConfig = 'config_rest.yaml';
    public function index(){
        $data =  Db::table('qknow_videos')
            ->where('qknow_videos.display','=',1)
            ->join('qknow_properties', 'qknow_videos.id', '=', 'qknow_properties.id')
            ->join('qknow_property_details', 'qknow_property_details.id', '=', 'qknow_properties.id')
            ->select('qknow_videos.*', 'qknow_properties.name',"qknow_property_details.name")
            ->get();;
        return $data;
    }
}