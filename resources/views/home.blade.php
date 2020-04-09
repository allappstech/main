@extends('layouts.app')

@section('content')
 
 
  
<div id="demo" class="carousel slide d-none  d-sm-block" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="{{url('/images/slides/001.jpg')}}" alt="Los Angeles">
	  <div class="carousel-caption">
     
  </div>
    </div>
    <div class="carousel-item">
      <img src="{{url('/images/slides/002.jpg')}}" alt="Chicago">
	  <div class="carousel-caption">
     
  </div>
    </div>
    <div class="carousel-item">
      <img src="{{url('/images/slides/003.jpg')}}" alt="New York">
	  <div class="carousel-caption">
     
  </div>
    </div>
	
	  <div class="carousel-item">
      <img src="{{url('/images/slides/004.jpg')}}" alt="New York">
	  <div class="carousel-caption">
     
  </div>
    </div>
	
	  <div class="carousel-item">
      <img src="{{url('/images/slides/005.jpg')}}" alt="New York">
	  <div class="carousel-caption">
     
  </div>
    </div>
	
	 <div class="carousel-item">
      <img src="{{url('/images/slides/006.jpg')}}" alt="New York">
	  <div class="carousel-caption">
     
  </div>
    </div>
	
	 <div class="carousel-item">
      <img src="{{url('/images/slides/007.jpg')}}" alt="New York">
	  <div class="carousel-caption">
     
  </div>
    </div>
	
	 <div class="carousel-item">
      <img src="{{url('/images/slides/008.jpg')}}" alt="New York">
	  <div class="carousel-caption">
     
  </div>
    </div>
	
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
<div class="row">
   <div class="col-md-7">
      <div class="border fmargin">
	  
	  
	  
	  <h3>The Rector</h3>

 



You are welcome to this great institution.<img align="left" src="{{url('/images/001.jpg')}}"> The institution is indeed great in that it strives in the maintenance of  good moral and academic standards. For this, therefore, you are considered lucky for having been admitted into the institution. In this medium you are reminded that as students, you arhere for a specific purpose; pursue and attain an academic qualification. As such, you must work hard and conduct yourselves maturely and peacefully for you to be able to attain your desired objective

<b>Professor Aminu A Ibrahim FMAN </b>is currently the Rector, The Polytechnic of Sokoto State. He was appointed

 by the visionary Governor of Sokoto State  Rt. Hon. AminuWaziriTambuwalCFR(MutawallenSokoto)  as part of 

 his people oriented programme to invigorate and galvanise development in the Education Sector for the 

 Socio-economic development of the state and the Country in general.


	  
	  <br>
	  <br>
	  </div>
   </div>
   <div class="col-md-5">
   <div class="fmargin border">
     <div><img src="{{url('/images/mission.png')}}" width="120"> </div>
Our Mission is to serve the people of Sokoto State, Nigeria and humanity at large by promoting the advancement of Knowledge, scholarship, discipline and community services througth teaching, training, publication,linkages,provision  of facilities, offer of rewards for excelence in character and contribution to socio-cultural and economic development of the society


   </div>
   <div class="fmargin border">
     <div><img  src="{{url('/images/vision.png')}}" width="120"> </div>

	   Our vision is to nurture a Polytechnic of high academic excelence in the areas of Science, Engineering, Technology and Humanities for the ultimate purpose of producing relevant skilled manpower need for the economic and technological development of the nation. 

   </div>
   
   
   </div>
</div>

@endsection
