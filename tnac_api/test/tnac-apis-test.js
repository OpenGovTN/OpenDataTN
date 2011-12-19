var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/tnac_apis.js')


var suite = APIeasy.describe('tnac_api');

suite.use(config.host, config.port)
    .discuss('When asking for the list of api versions supported')
    .path('/tnac')
    .get()
    .expect(200)
    .expect('should respond with at least one api', function (err, res, body) {
        var result = JSON.parse(body);
        var apis = result['apis'];

        assert.isArray(apis);
        assert.isTrue(apis.length >= 1);
    })
    .expect('should support api version 1 with 4 endpoints as the first API on the list', function (err, res, body) {
        var result = JSON.parse(body);
        var apis = result['apis'];

        assert.isArray(apis);
        var tnacApis = expectedData['apis'];
        assert.deepEqual(apis[0], tnacApis[0]);
        
    })
    .undiscuss()
    .discuss('When asking for the list of endpoints supported by version 1 of the API')
    .get('/v1')
    .expect(200)
    .expect('should list at least one endpoint', function (err, res, body) {
        var result = JSON.parse(body);
        var endpoints = result['endpoints'];

        assert.isArray(endpoints);
        assert.isTrue(endpoints.length >= 1);
    })
    .expect('should support exactly 4 endpoints', function (err, res, body) {
        var result = JSON.parse(body);
        var endpoints = result['endpoints'];

        assert.isArray(endpoints);
        var tnacV1Endpoints = expectedData['apis'][0]['endpoints'];
        assert.deepEqual(endpoints, tnacV1Endpoints);
        
    })
    .export(module);
