Package.describe({
  summary: 'Meteor package adding wisp language support.'
});

Npm.depends({"wisp": "0.8.0"});

var wisp_handler = function(bundle, source_path, serve_path, where) {
  var fs = Npm.require('fs');
  var path = Npm.require('path');

  var read = Npm.require('wisp/reader.js').read_;
  var compile = Npm.require('wisp/compiler.js').compile_;

  var intro = "var exports = {};\n";

  serve_path = serve_path + '.js';

  var contents = fs.readFileSync(source_path, 'utf8');

  try {
    contents = intro + compile(read(contents));
  } catch (e) {
    return bundle.error(
      source_path + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }

  contents = new Buffer(contents);
  bundle.add_resource({
    type: "js",
    path: serve_path,
    data: contents,
    where: where
  });
}

Package.register_extension("wisp", wisp_handler);


Package.on_test(function (api) {
  var both = ['client', 'server'];
  
  api.add_files(['test.wisp', 'test2.js'], both);
});
