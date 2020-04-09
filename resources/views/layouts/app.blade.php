<!doctype html>
<html lang="{{config('app.locate')}}">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('css/custom.css')}}">
 <script src="{{ asset('js/jquery.js') }}"></script>
 <script src="{{ asset('js/jscript.js') }}"></script>
 <script src="{{ asset('js/bootstrap.min.js') }}"></script>
<title>{{config('app.name','UASPOLY')}}</title>
</head>
<body>
@include('includes.navbar')
<div class="container-fluid">

@yield('content')
</div>
@include('includes.footer')
</body>
</html>