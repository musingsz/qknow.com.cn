<?php namespace Qknow\Api\Models;

use Model;

/**
 * Video Model
 */
class Video extends Model
{

    /**
     * @var string The database table used by the model.
     */
   // public $table = 'qknow_api_videos';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    protected $jsonable = ['data'];

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


}