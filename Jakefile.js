//requires
var sys = require('sys');
var execute = require('child_process').exec;
var fs = require('fs');
var jsp = require("uglify-js").parser;
var uglify = require("uglify-js").uglify;

//tasks
desc('Prepare files for production');
task({'default': ['coffee', 'handlebars']}, function (params) {
  var template = fs.readFileSync('src/faqjs-template.handlebars.js', 'utf8');
  var js = fs.readFileSync('src/faqjs.js', 'utf8');
  var ast = jsp.parse(template + js); // parse code and get the initial AST
  ast = uglify.ast_mangle(ast); // get a new AST with mangled names
  ast = uglify.ast_squeeze(ast); // get an AST with compression optimizations
  var minJs = uglify.gen_code(ast); // compressed code here
  fs.writeFileSync('faqjs.min.js', minJs, 'utf8');
});

desc('Watch .coffee and .handlebars files for changes and auto compile on change');
task({'dev': ['coffee', 'handlebars']}, function (params) {
  watchDir('src', compileCoffeeScript, /\.coffee$/);
  watchDir('src', compileHandlebars, /\.handlebars$/);
  console.log('Watching .coffee and .handlebars files for changes... [ctrl+c to exit]');
});

desc('Compile all .coffee files');
task('coffee', function (params) {
  console.log('Compiling all .coffee files');
  exec("coffee -l -b -c src/*.coffee");
}, true);

desc('Compile all .handlebars files');
task('handlebars', function(params) {
  console.log('Compiling all .handlebars files');
  fs.readdir('src', function(err, files) {
    for (var i = 0; i < files.length; i++) {
      if (/\.handlebars$/.test(files[i])) {
        compileHandlebars('src/' + files[i]);
      }
    }
  });
}, true);

//helper functions
function compileCoffeeScript(file) {
  exec("coffee -l -b -c " + file);
}

function compileHandlebars(file) {
  exec('handlebars -f ' + file + '.js ' + file);
}

function watchDir(path, callback, match) {
  fs.readdir(path, function(err, files) {
    for (var i = 0; i < files.length; i++) {
      if (!match || match.test(files[i])) {
        watchFile(path + '/' + files[i], callback);
      }
    }
  });
}

function watchFile(file, callback) {
  fs.watchFile(file, { persistent: true, interval: 500 }, function(curr, prev) {
    if (curr.mtime.getTime() != prev.mtime.getTime()) {
      console.log('Compiling ' + file);
      callback(file);
    }
  });
}

function exec(command) {
  //console.log(command);
  execute(command, function(error, stdout, stderr) {
    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.log(stderr);
    }
    complete();
  });
}
