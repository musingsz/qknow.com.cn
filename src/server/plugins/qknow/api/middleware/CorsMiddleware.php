<?php
/**
 * Created by PhpStorm.
 * User: little-wei
 * Date: 2016/9/2
 * Time: 15:01
 */

namespace Qknow\Api\Middleware;

use Closure;

class CorsMiddleware
{
    public function handle($request, Closure $next)
    {

        header("Access-Control-Allow-Origin: *");

        /**
         * Handle request
         */
        return $next($request);
    }

    public function terminate($request, $response)
    {
        // Store or dump the log data...
        //dd( DB::getQueryLog());
    }

}