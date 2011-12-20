// Expected data for Circonscription 342 Delegation 64 Centre 020
var bureaux = {"bureaux":[{"code":"01","name":"قاعة 1"}]};

module.exports.bureaux = bureaux;

module.exports.centre_test_id = "020";
module.exports.deleg_test_id = require("./tnac_deleg.js").deleg_test_id;
module.exports.circ_test_id = require("./tnac_circ.js").circ_test_id;
