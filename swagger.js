const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Supplies and Vendors API',
    description: 'Supplies and Vendors API'
  },
  host: 'localhost:8080',
  schemes: ['http','https']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
//   });
