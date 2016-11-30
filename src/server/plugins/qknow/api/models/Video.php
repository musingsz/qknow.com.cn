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

    //当前id
    public static function getVideoById($id){
        return DB::table('qknow_chapters')
            ->join('qknow_videos','qknow_videos.id','=','qknow_chapters.video_id')
            ->where('qknow_chapters.id',$id)
            ->select('qknow_videos.id','qknow_chapters.title','qknow_videos.URL',"qknow_chapters.sub_title")
            ->first();
    }
    //当前id的上一条
    public static function getVideoPreById($id){
      // return DB::table('qknow_chapters')
      //     ->join('qknow_videos','qknow_videos.id','=','qknow_chapters.video_id')
      //     ->where('qknow_chapters.id','<',$id)
      //     ->where('qknow_chapters.parent_id','=',('SELECT qknow_chapters.parent_id from qknow_chapters WHERE qknow_chapters.id = '+$id))
      //     ->select('qknow_videos.id','qknow_chapters.title','qknow_videos.URL',"qknow_chapters.sub_title")
      //     ->orderBy('qknow_chapters.list_order','asc')
      //     ->first();

        return Db::select('SELECT qknow_chapters.video_id from qknow_chapters where qknow_chapters.id < ?
             and qknow_chapters.parent_id = (SELECT qknow_chapters.parent_id
             from qknow_chapters WHERE qknow_chapters.id = ?)
                      ORDER BY list_order ASC LIMIT 1', [$id,$id]);
    }
    //当前id的下一条
    public static function getVideoNextById($id){
      return Db::select('SELECT qknow_chapters.video_id from qknow_chapters where qknow_chapters.id > ?
           and qknow_chapters.parent_id = (SELECT qknow_chapters.parent_id
           from qknow_chapters WHERE qknow_chapters.id = ?)
                    ORDER BY list_order ASC LIMIT 1', [$id,$id]);
    }




}
