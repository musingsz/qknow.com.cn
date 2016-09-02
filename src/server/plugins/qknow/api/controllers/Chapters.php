<?php namespace Qknow\Api\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Qknow\Api\Models\Chapter;

/**
 * Chapters Back-end Controller
 */
class Chapters extends Controller
{
    public $implement = [
        'Mohsin.Rest.Behaviors.RestController'
    ];

    public $restConfig = 'config_rest.yaml';


    public function show($id)
    {
        $parent = Chapter::getChapterById($id);

        $child_array = [];
        foreach ($parent as $item){
            $child_array = Chapter::getChapterByParentId($item->id);
        }
        $parent['chapter_list'] = $child_array;
        return [
            "meta"=>[
                "code"=>200,
                "message"=>"请求成功",
                "server_time"=>time()
            ],
            "data"=>$parent
        ];
    }
}