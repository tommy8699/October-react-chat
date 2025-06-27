<?php

namespace App\Api\Middleware;

use Closure;

class ExampleMiddleware
{
    public function handle($request, Closure $next)
    {
        // niečo urob pred controllerom
        return $next($request);
    }
}
