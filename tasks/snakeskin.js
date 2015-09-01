/*!
 * grunt-snakeskin
 * https://github.com/SnakeskinTpl/grunt-snakeskin
 *
 * Released under the MIT license
 * https://github.com/SnakeskinTpl/grunt-snakeskin/blob/master/LICENSE
 */

var
	$C = require('collection.js').$C;

var
	path = require('path'),
	snakeskin = require('snakeskin'),
	beautify = require('js-beautify');

module.exports = function (grunt) {
	grunt.registerMultiTask('snakeskin', 'Compile Snakeskin templates', function () {
		var
			opts = $C.extend(true, {lineSeparator: '\n'}, this.options(), {throws: true, cache: false}),
			prettyPrint;

		if (opts.exec && opts.prettyPrint) {
			opts.prettyPrint = false;
			prettyPrint = true;
		}

		function filter(src) {
			if (grunt.file.exists(src)) {
				return true;
			}

			grunt.log.warn('Source file "' + src + '" not found.');
			return false;
		}

		$C(this.files).forEach(function (file) {
			var
				isDir = !path.extname(file.dest);

			function map(src) {
				var
					tpls = {},
					res = '';

				if (opts.exec) {
					opts.context = tpls;
				}

				try {
					res = snakeskin.compile(grunt.file.read(src), opts, {file: src});

					if (opts.exec) {
						res = snakeskin.returnMainTpl(tpls, src, opts.tpl) || '';

						if (res) {
							res = res(opts.data);

							if (prettyPrint) {
								res = beautify['html'](res);
								res = res.replace(/\r?\n|\r/g, opts.lineSeparator);
							}

							res += opts.lineSeparator;
						}
					}

					if (isDir) {
						var savePath;

						if (opts.exec) {
							savePath = path.basename(src, path.extname(src)) + '.html';

						} else {
							savePath = path.basename(src) + '.js';
						}

						grunt.file.write(
							path.join(file.dest, savePath),
							res
						);

						grunt.log.writeln('File "' + file.dest + '" created.');
					}

				} catch (err) {
					grunt.log.error(err.message);
				}

				return res;
			}

			if (!isDir) {
				grunt.file.write(file.dest, $C(file.src).map(map, {filter: filter}).join(''));
				grunt.log.writeln('File "' + file.dest + '" created.');
			}
		});
	});
};
