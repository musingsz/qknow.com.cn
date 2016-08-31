<?php namespace Qknow\Api\Models;

use Model;

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

    public function hasOneProperty()
    {

        return $this->hasOne('Property','category_id','id');

    }


}