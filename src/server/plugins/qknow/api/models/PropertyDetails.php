<?php namespace Qknow\Api\Models;

use Model;

/**
 * PropertyDetails Model
 */
class PropertyDetails extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'qknow_property_details';


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

}