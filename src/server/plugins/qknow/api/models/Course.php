<?php namespace Qknow\Api\Models;

use Model;
use DB;



/**
 * Course Model
 */
class Course extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'qknow_courses';


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

    public static function getAllCourse(){
        return DB::table('qknow_courses')
            ->join('qknow_course_types','course_type_id','=','qknow_course_types.id')
            ->join('qknow_statistics','statistice_id','=','qknow_statistics.id')
            ->where('qknow_courses.display', 1)
            ->select('.qknow_courses.id','qknow_course_types.id',
                'qknow_course_types.course_type_name','title','sub_title','qknow_courses.image',
                'qknow_statistics.sum')
            ->orderBy('qknow_courses.list_order','asc')
            ->get();
    }

    public static function getCourseById($id){

        return DB::table('qknow_courses')
            ->join('qknow_course_types','course_type_id','=','qknow_course_types.id')
            ->join('qknow_statistics','statistice_id','=','qknow_statistics.id')
            ->where('qknow_courses.display', 1)
            ->where('course_type_id',$id)
            ->select('.qknow_courses.id','qknow_course_types.id',
                'qknow_course_types.course_type_name','title','sub_title','qknow_courses.image',
                'qknow_statistics.sum')
            ->orderBy('qknow_courses.list_order','asc')
            ->get();
    }

}