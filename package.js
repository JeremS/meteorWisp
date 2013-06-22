Package.describe({
  summary: 'Meteor package adding wisp language support.'
});

Npm.depends({"wisp": "0.8.0"});

var wisp_handler = function(bundle, source_path, serve_path, where) {
  var fs = Npm.require('fs');
  var path = Npm.require('path');
  var read = Npm.require('wisp/reader.js').read_;
  var compile = Npm.require('wisp/compiler.js').compile_;
  serve_path = serve_path + '.js';

  var contents = fs.readFileSync(source_path);

  try {
    contents = compile(read(contents.toString('utf8')));
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
  api.add_files(
      ['test.wisp'], 
      ['client', 'server']
  );
});
