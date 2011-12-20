var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/tnac_centre.js');
var expectedBureauxData = expectedData.bureaux;
var centre_test_id = expectedData.centre_test_id; 
var deleg_test_id = expectedData.deleg_test_id; 
var circ_test_id = expectedData.circ_test_id; 

var fn_utils = require('./lib/tnac_test_utils.js');


var suite = APIeasy.describe('tnac_centre');

suite.use(config.host, config.port)
    .discuss('When asking for the list of bureaux')
    .path('/tnac/v1')
    .get('/centre/'+ circ_test_id + '/' + deleg_test_id + '/' + centre_test_id)
    .expect(200)
    .expect('should respond with at least one bureau', function (err, res, body) {
        fn_utils.checkAtLeastOneEntry(err, res, body, 'bureaux');
    })
    .expect('should have a code and a name fields for each bureau', function (err, res, body) {
        fn_utils.checkAllEntriesCodeName(err, res, body, 'bureaux');
    })
    .expect('should provide the expected response', function (err, res, body) {
        assert.deepEqual(expectedBureauxData, JSON.parse(body));
    })
    .export(module);
