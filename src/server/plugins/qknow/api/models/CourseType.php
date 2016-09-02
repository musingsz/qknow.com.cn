<?php namespace Qknow\Api\Models;

use Model;
use DB;

/**
 * CourseType Model
 */
class CourseType extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'qknow_course_types';


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

    public static function getAllCourseType(){
        return DB::table('qknow_course_types')
                ->where('display', 1)
                ->select('id','course_type_name', 'image')
                ->orderBy('list_order','asc')
                ->get();
    }

}