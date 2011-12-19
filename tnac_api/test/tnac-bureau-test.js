var vows = require('vows');
var assert = require('assert');
var APIeasy = require('api-easy');
var config = require('./config.js');
var expectedData = require('./fixtures/tnac_bureau.js');
var expectedResult = expectedData.result;
var bureau_test_id = expectedData.bureau_test_id; 
var centre_test_id = expectedData.centre_test_id; 
var deleg_test_id = expectedData.deleg_test_id; 
var circ_test_id = expectedData.circ_test_id; 

var fn_utils = require('./lib/tnac_test_utils.js');


var suite = APIeasy.describe('tnac_bureau');

suite.use(config.host, config.port)
    .discuss('When asking for the results for a specific bureau')
    .path('/tnac/v1')
    .get('/bureau/'+ circ_test_id + '/' + deleg_test_id + '/' + centre_test_id + '/' + bureau_test_id)
    .expect(200)
    .expect('should respond with exactly one bureau', function (err, res, body) {
        assert.isObject(JSON.parse(body));
    })
    .expect('should have a code and a name fields for each circ, deleg, centre, bureau', function (err, res, body) {
        var result = JSON.parse(body);
        fn_utils.checkEntryCodeName(result, 'delegation');
        fn_utils.checkEntryCodeName(result, 'circonscription');
        fn_utils.checkEntryCodeName(result, 'centre_vote');
        fn_utils.checkEntryCodeName(result, 'bureau_vote');
        assert.isDefined(result.resultat);
        assert.isArray(result.resultat.listes);
        assert.isTrue(result.resultat.listes.length >= 1);
    })
    .expect('should have a "resultat" with at least votes for one list ', function (err, res, body) {
        var result = JSON.parse(body);
        assert.isDefined(result.resultat);
        assert.isArray(result.resultat.listes);
        assert.isTrue(result.resultat.listes.length >= 1);
    })
    .expect('should provide the expected response', function (err, res, body) {
        assert.deepEqual(expectedResult, JSON.parse(body));
    })
    .export(module);
