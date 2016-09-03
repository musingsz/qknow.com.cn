<?php namespace Qknow\Api\Models;

use Model;
use DB;
/**
 * chapter Model
 */
class Chapter extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'qknow_chapters';


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

    public static function getChapterById($id){

        return DB::table('qknow_chapters')
                    ->where('course_id',$id)
                    ->where('parent_id',0)
                    ->where('display', 1)
                    ->select('id','course_id','video_id','parent_id','title','time_length')
                    ->orderBy('qknow_chapters.list_order','asc')
                    ->get();
    }

    public static function getChapterByParentId($id){

        return DB::table('qknow_chapters')
            ->where('parent_id',$id)
            ->where('display', 1)
            ->select('id','course_id','video_id','parent_id','title','time_length')
            ->orderBy('qknow_chapters.list_order','asc')
            ->get();
    }


}
