let mix = require('laravel-mix');

mix.js('src/app.js', 'js')
mix.sass('src/app.scss', 'css')
.setPublicPath('assets');