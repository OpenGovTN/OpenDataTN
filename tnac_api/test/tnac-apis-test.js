var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/data.js')


var suite = APIeasy.describe('tnac_api');

suite.use(config.host, config.port)
    .discuss('get api')
    .path('/tnac')
    .get()
    .expect(200)
    .expect('should respond with at least one api', function (err, res, body) {
        console.log("test");
        var result = JSON.parse(body);
        var apis = result['apis'];

        assert.isArray(apis);
        assert.isTrue(apis.length >= 1);
        var tnacApis = expectedData['apis'];
        assert.deepEqual(apis, tnacApis);
    })
    .export(module);
