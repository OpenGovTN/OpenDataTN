var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/tnac_circ.js');
var expectedCircData = expectedData.circonscriptions;
var expectedDelegData = expectedData.delegations;
var circ_test_id = expectedData.circ_test_id; 


var suite = APIeasy.describe('tnac_circonscription');

suite.use(config.host, config.port)
    .discuss('When asking for the list of circonscriptions')
    .path('/tnac/v1')
    .get('/circonscription')
    .expect(200)
    .expect('should respond with at least one circonscription', function (err, res, body) {
        var result = JSON.parse(body);
        var circonscriptions = result['circonscriptions'];

        assert.isArray(circonscriptions);
        assert.isTrue(circonscriptions.length >= 1);
    })
    .expect('should have a code and a name fields for each circonscription', function (err, res, body) {
        var result = JSON.parse(body);
        var circonscriptions = result['circonscriptions'];

        assert.isArray(circonscriptions);
        for (var i=0; i< circonscriptions.length; i++){
            assert.isDefined(circonscriptions[i].code);
            assert.isDefined(circonscriptions[i].name);
        }
    })
    .expect('should provide the expected response', function (err, res, body) {
        var result = JSON.parse(body);
        assert.deepEqual(expectedCircData, result);
    })
    .undiscuss()
    .discuss('When asking for a specific circonscription')
    .get('/circonscription/' + circ_test_id)
    .expect(200)
    .expect('should respond with at least delegation', function (err, res, body) {
        var result = JSON.parse(body);
        var delegations = result['delegations'];

        assert.isArray(delegations);
        assert.isTrue(delegations.length >= 1);
    })
    .expect('should have a code and a name fields for each delegation', function (err, res, body) {
        var result = JSON.parse(body);
        var delegations = result['delegations'];

        assert.isArray(delegations);
        for (var i=0; i< delegations.length; i++){
            assert.isDefined(delegations[i].code);
            assert.isDefined(delegations[i].name);
        }
    })
    .expect('should provide the expected response', function (err, res, body) {
        var result = JSON.parse(body);
        assert.deepEqual(expectedDelegData, result);
    })
    .export(module);
