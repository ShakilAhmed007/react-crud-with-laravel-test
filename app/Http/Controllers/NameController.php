<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Name as NameResource;
use App\Models\Name;

class NameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return NameResource::collection(Name::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required']
        ]);

        $store = new Name([
            'name' => $request->name
        ]);
        $store->save();
        return response()->json([
            'status' => 'ok'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new NameResource(Name::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => ['required']
        ]);

        $update = Name::findOrFail($id);
        $update->name = $request->name;
        $update->save();
        return response()->json([
            'status' => 'ok'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Name::findOrfail($id);
        $delete->delete();
        return response()->json([
            'status' => 'ok'
        ]);
    }
}
