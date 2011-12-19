var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/tnac_circ.js');
var expectedCircData = expectedData.circonscriptions;
var expectedDelegData = expectedData.delegations;
var circ_test_id = expectedData.circ_test_id; 

var fn_utils = require('./lib/tnac_test_utils.js');

var suite = APIeasy.describe('tnac_circonscription');

suite.use(config.host, config.port)
    .discuss('When asking for the list of circonscriptions')
    .path('/tnac/v1')
    .get('/circonscription')
    .expect(200)
    .expect('should respond with at least one circonscription', function (err, res, body) {
        fn_utils.checkAtLeastOneEntry(err, res, body, 'circonscriptions');
    })
    .expect('should have a code and a name fields for each circonscription', function (err, res, body) {
        fn_utils.checkAllEntriesCodeName(err, res, body, 'circonscriptions');
    })
    .expect('should provide the expected response', function (err, res, body) {
        assert.deepEqual(expectedCircData, JSON.parse(body));
    })
    .undiscuss()
    .discuss('When asking for a specific circonscription')
    .get('/circonscription/' + circ_test_id)
    .expect(200)
    .expect('should respond with at least delegation', function (err, res, body) {
        fn_utils.checkAtLeastOneEntry(err, res, body, 'delegations');
    })
    .expect('should have a code and a name fields for each delegation', function (err, res, body) {
        fn_utils.checkAllEntriesCodeName(err, res, body, 'delegations');
    })
    .expect('should provide the expected response', function (err, res, body) {
        assert.deepEqual(expectedDelegData, JSON.parse(body));
    })
    .export(module);
