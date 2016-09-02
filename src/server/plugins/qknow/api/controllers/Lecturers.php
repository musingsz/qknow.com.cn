<?php namespace Qknow\Api\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Lecturers Back-end Controller
 */
class Lecturers extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Qknow.Api', 'api', 'lecturers');
    }
}