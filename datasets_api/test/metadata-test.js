var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var metadata = require('./fixtures/metadata.js')


var suite = APIeasy.describe('opendatatn');

suite.use(config.host, config.port)
    .discuss('get api')
    .path('/api')
    .get()
    .expect(200)
    .expect('datasets must contain tnac dataset', function (err, res, body) {
        console.log("test");
        var result = JSON.parse(body);
        var datasets = result['datasets'];

        assert.isArray(datasets);
        assert.isTrue(datasets.length > 0);
        var tnacDataset = metadata['dataset'];
        assert.deepInclude(datasets, tnacDataset);
    })
    .export(module);
