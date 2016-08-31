<?php

namespace  Qknow\Api\Middleware;

use Closure;
use DB;
/**
 * Created by PhpStorm.
 * User: little-wei
 * Date: 2016/8/31
 * Time: 15:43
 */
class BeforeAnyDbQueryMiddleware
{
    public function handle($request, Closure $next)
    {
        DB::enableQueryLog();
        /**
         * Handle request
         */
        return $next($request);
    }

    public function terminate($request, $response)
    {
        // Store or dump the log data...
        dd(
            DB::getQueryLog()
        );
    }
}