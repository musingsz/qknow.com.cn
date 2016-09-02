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
        return DB::table('qknow_videos')
            ->where('chapter_id',$id)
            ->where('display', 1)
            ->select('id','URL')
            ->get();
    }




}
