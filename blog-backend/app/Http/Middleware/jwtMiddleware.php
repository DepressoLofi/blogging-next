<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;

class jwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try{
            JWTAuth::parseToken()->authenticate();

        } catch(TokenExpiredException $e){
            return response()->json(['error' => 'Token has expired'], 401);
        } catch (TokenInvalidException $e) {
            // Handle invalid token
            return response()->json(['error' => 'Token is invalid'], 401);
        } catch (JWTException $e) {
            // Handle missing token
            return response()->json(['error' => 'Token is missing'], 401);
        }
        

        return $next($request);
    }
}
