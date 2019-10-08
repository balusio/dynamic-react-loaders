var rollup = require('rollup');
var babel = require("rollup-plugin-babel");

rollup.rollup({
  input: "src/main.js",
  plugins: [ babel({
    babelrc: false,
    presets: [['@babel/env', { modules: false }]]

  }) ],
  external: ['services/initialize-service','ef'],

}).then(function (bundle) {
  bundle.write({
    file: "dist/bundle.js",
    format: "umd",
    globals: {
      'services/initialize-service': 'InitService',
      'ef': 'ef'
    }
  });
});
 

rollup.rollup({
  input: "src/services/initialize-service.js",
  plugins: [ babel({
    babelrc: false,
    presets: [['@babel/env', { modules: false }]]
  }) ],
  external: ['ef']

}).then(function (bundle) {
  bundle.write({
    file: "dist/initialize-service.js",
    format: "umd",
    name: "InitService",
    globals: {
      'ef': 'ef'
    }
  });
});

rollup.rollup({
  input: "src/loader.js",
  plugins: [ babel({
    babelrc: false,
    presets: [['@babel/env', { modules: false }]]
  }) ],
  external: ['ef']

}).then(function (bundle) {
  bundle.write({
    file: "dist/loader.js",
    format: "umd",
    name: "loader",
    globals: {
      'ef': 'ef'
    }
  });
});

