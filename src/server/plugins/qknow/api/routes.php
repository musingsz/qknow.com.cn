<?php

Route::group(['prefix' => 'api/v1'], function () {
    Route::resource('videos', 'Qknow\Api\Controllers\Videos');
    Route::resource('courseTypes', 'Qknow\Api\Controllers\CourseTypes');
    Route::resource('courses', 'Qknow\Api\Controllers\Courses');
    Route::resource('chapters', 'Qknow\Api\Controllers\Chapters');
});
