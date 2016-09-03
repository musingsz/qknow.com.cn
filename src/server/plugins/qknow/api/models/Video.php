<?php namespace Qknow\Api\Models;

use Model;
use DB;

/**
 * Video Model
 */
class Video extends Model
{


    public $table = 'qknow_videos';

    protected $primaryKey = 'id';

    public $exists = false;

    protected $dates = ['last_seen_at'];

    public $timestamps = true;

    protected $jsonable =  ['data'];

    protected $guarded = ['*'];


    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public static function getVideoById($id){
        return DB::table('qknow_chapters')
            ->join('qknow_videos','qknow_videos.id','=','qknow_chapters.video_id')
            ->where('qknow_chapters.id',$id)
            ->select('qknow_videos.id','qknow_chapters.title','qknow_videos.URL',"qknow_chapters.sub_title")
            ->first();
    }




}
