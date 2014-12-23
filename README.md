# grunt-snakeskin

Компиляция [Snakeskin](https://github.com/kobezzza/Snakeskin) шаблонов вместе с Grunt.

[![NPM version](http://img.shields.io/npm/v/grunt-snakeskin.svg?style=flat)](http://badge.fury.io/js/grunt-snakeskin)
[![NPM dependencies](http://img.shields.io/david/kobezzza/grunt-snakeskin.svg?style=flat)](https://david-dm.org/kobezzza/grunt-snakeskin)
[![Build Status](http://img.shields.io/travis/kobezzza/grunt-snakeskin.svg?style=flat&branch=master)](https://travis-ci.org/kobezzza/grunt-snakeskin)

## Установка

```bash
npm install grunt-snakeskin --save-dev
```

После этого плагин необходимо подключить в ваш Gruntfile.js

```js
grunt.loadNpmTasks('grunt-snakeskin');
```

## Пример

```js
grunt.initConfig({
	snakeskin: {
		compile: {
			options: {
				exec: true,
				prettyPrint: true
			},

			files: {
				'html/': ['test/fixtures/*.ss']
			}
		}
	}
});
```

## [Параметры](https://github.com/kobezzza/Snakeskin/wiki/compile#opt_params)

### exec

Тип: `Boolean`

Значение по умолчанию: `false`

Если параметр равен `true`, то после компиляции шаблон будет выполнен и сохранится его результат.

### tpl

Тип: `String`

Название запускаемого шаблона (если задан параметр `exec`), если параметр не задан, то запускаемый шаблон
определяется по правилу:

```js
%fileName% || main || index || Object.keys().sort()[0];
```

### data

Тип: `?`

Данные для запускаемого шаблона (если задан параметр `exec`).

## Лицензия

The MIT License (MIT)

Copyright (c) 2014 Андрей Кобец (Kobezzza) <kobezzza@mail.ru>

Данная лицензия разрешает лицам, получившим копию данного программного обеспечения и
сопутствующей документации (в дальнейшем именуемыми «Программное Обеспечение»),
безвозмездно использовать Программное Обеспечение без ограничений, включая неограниченное право на использование,
копирование, изменение, добавление, публикацию, распространение, сублицензирование и/или
продажу копий Программного Обеспечения, также как и лицам, которым предоставляется данное
Программное Обеспечение, при соблюдении следующих условий:

Указанное выше уведомление об авторском праве и данные условия должны быть включены во все копии или
значимые части данного Программного Обеспечения.

ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ,
ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ, СООТВЕТСТВИЯ ПО ЕГО КОНКРЕТНОМУ НАЗНАЧЕНИЮ И
ОТСУТСТВИЯ НАРУШЕНИЙ ПРАВ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО ИСКАМ О
ВОЗМЕЩЕНИИ УЩЕРБА, УБЫТКОВ ИЛИ ДРУГИХ ТРЕБОВАНИЙ ПО ДЕЙСТВУЮЩИМ КОНТРАКТАМ, ДЕЛИКТАМ ИЛИ ИНОМУ, ВОЗНИКШИМ ИЗ,
ИМЕЮЩИМ ПРИЧИНОЙ ИЛИ СВЯЗАННЫМ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ
ИНЫМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.
