var assert = require('assert');

module.exports.checkAtLeastOneEntry = function (err, res, body, field) {
        var result = JSON.parse(body);
        var results = result[field];

        assert.isArray(results);
        assert.isTrue(results.length >= 1);
};


module.exports.checkEntryCodeName = function (result, field) {
        var value = result[field];

        assert.isDefined(value.name);
        assert.isDefined(value.code);
};

module.exports.checkAllEntriesCodeName = function (err, res, body, field) {
        var result = JSON.parse(body);
        var results = result[field];

        assert.isArray(results);
        for (var i=0; i< results.length; i++){
            assert.isDefined(results[i].code);
            assert.isDefined(results[i].name);
        }
};

