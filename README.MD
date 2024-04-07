// меняем index.js на galpfile.js "main": "gulpfile.js",

// добавляем тип - "module" "type": "module",

устанавливаем GULP глобально в терминале: npm i gulp-cli -g

установка GULP локально для проекта npm i gulp -D

создаем главный файл gulpfile.js в корне проекта

установка плагина DEL для удаления файлв npm i -D del

# установка плагина для сборки файлв npm i -D gulp-file-include

# установка плагина для в VSCode Path Autocomplete

# f1 > open settings (JSON) >

# "path-autocomplete.pathMappings":

# {

# "@img": "${folder}/src/img",

# "@scss": "${folder}/src/scss",

# "@js": "${folder}/src/js",

# },

# устанавливаем плагин для конвертации изображений в webp npm i -D gulp-webp-html-nosvg

# устанавливаем плагин для конвертации из sass в css npm i -D sass gulp-sass gulp-rename gulp-clean-css gulp-webpcss gulp-webp gulp-autoprefixer gulp-group-css-media-queries webp-converter@2.2.3 webpack webpack-stream swiper gulp-imagemin gulp-newer

## плагины для шрифтов

# npm i -D fs gulp-fonter gulp-ttf2woff2

# для svg gulp-svg-sprite gulp-if gulp-zip
