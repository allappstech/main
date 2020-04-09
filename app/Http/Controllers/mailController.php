<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class mailController extends Controller
{
    public function send(){
		mail::send(['text'=>'mail'],['name'=>'Zubairu'], function($message){
			$message->to('zubairumismail@gmail.com')->subject('test smtp');
			$message->from('zubairumismail@gmail.com','zubairu');
		});
	}
}
