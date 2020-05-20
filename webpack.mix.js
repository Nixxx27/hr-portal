const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/app.js','resources/themes/bootstrap/js/bootstrap.min.js','resources/themes/jquery/js/jquery-latest.min.js'
,'resources/themes/fa-fontawesome/js/all.min.js'], 'public/js')
   // .sass('resources/sass/app.scss', 'public/css')
   .styles(['resources/themes/bootstrap/css/bootstrap.min.css','resources/themes/cssmenu/css/styles.css',
   'resources/themes/fa-fontawesome/css/all.min.css','resources/themes/hr-portal/css/styles.css'], 'public/css/app.css');
