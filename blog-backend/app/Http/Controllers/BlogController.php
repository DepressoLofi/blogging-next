<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Exception;
use Illuminate\Http\Request;


class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();

        return response()->json([
            'status' => 'success',
            'data' => $blogs
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return response()->json([
            'status' => 'success',
            'data' => $blog
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $validation = $request->validate([
                'title' => 'required',
                'content' => 'required',
                'picture' => ' mimetypes:image/jpeg,image/png,image/jpg,image/gif,image/webp|max:2048',
                'user_id' => 'required'
            ]);
            $blog = Blog::create($validation);
    
            return response()->json([
                'status' => 'success',
                'data' => $blog
            ]);
        } catch(Exception $error){
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 'error',
                'error' => $error->getMessage()
            ]);
        }
        
    }

    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
