<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Personiv HR Portal</title>
    <script src="{{ asset('js/app.js') }}?v=2.0" defer></script>
    <link href="{{ asset('css/app.css') }}?v=2.0" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav-top></nav-top>
        <div class="container-fluid">
            {{-- @guest
            @else   --}}
            <nav-menu></nav-menu>  
            {{-- @endguest --}}
           
            @yield('content')
        </div>
    </div>
</body>
</html>
