var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/tnac_deleg.js');
var expectedCentreData = expectedData.centres;
var deleg_test_id = expectedData.deleg_test_id; 
var circ_test_id = expectedData.circ_test_id; 

var fn_utils = require('./lib/tnac_test_utils.js');


var suite = APIeasy.describe('tnac_delegation');

suite.use(config.host, config.port)
    .discuss('When asking for the list of centres')
    .path('/tnac/v1')
    .get('/delegation/'+ circ_test_id + '/' + deleg_test_id)
    .expect(200)
    .expect('should respond with at least one centre', function (err, res, body) {
        fn_utils.checkAtLeastOneEntry(err, res, body, 'centres');
    })
    .expect('should have a code and a name fields for each centre', function (err, res, body) {
        fn_utils.checkAllEntriesCodeName(err, res, body, 'centres');
    })
    .expect('should provide the expected response', function (err, res, body) {
        assert.deepEqual(expectedCentreData, JSON.parse(body));
    })
    .export(module);
