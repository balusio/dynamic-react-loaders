export default {
  input: 'src/main.js',
  output: {
    file:'bundle.js',
    format: 'umd',
    globals: {
      'services/initialize-service': 'InitService',
      'ef': 'ef'
    }
  },
  external: ['services/initialize-service','ef']
};


export default {
  input: 'src/services/initialize-service.js',
  output: {
    file:'init-service.js',
    format: 'umd',
    name: 'InitService',
    globals: {
      'ef': 'ef'
    }
  },
  external: ['ef']
};


export default {
  input: 'src/services/ef.js',
  output: {
    file:'ef.js',
    format: 'umd',
    name: 'ef'
  }
};



