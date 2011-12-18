/**
 * List functions to be exported from the design doc.
 */

var fn_setcharset = function() {
      start({
           "headers": {
             "Content-Type": "text/plain;charset=utf-8" 
            }
      }); 
};

var fn_tojson_format = function(index1, index2, array_name, element_name, code, name) {
      code = typeof(code) != 'undefined' ? code : 'code';
      name = typeof(name) != 'undefined' ? name : 'name';
      fn_setcharset();
      var rtn = {}; 
      rtn[array_name] = []; 
      while(row = getRow()) { 
        log(row.key);
        var value = row.key; 
        rtn[element_name] = {}; 
        rtn[element_name][code] = value[index1]; 
        rtn[element_name][name] = value[index2]; 
        rtn[array_name].push(key)
      } 
      send (toJSON(rtn));
};

module.exports = {
    'bureau_json' : function (head,req) {
      fn_setcharset();
      var row = getRow(); 
      delete row.value._id; 
      delete row.value._rev; 
      send (toJSON(row.value));
    },
    'centre_json' : function (head,req) {
      fn_tojson_format(3,4, 'bureaux', 'bureau');
    },
    'delegation_json' : function (head,req) {
      fn_tojson_format(2,3, 'centres', 'centre');
    },
    'circonscription_json' : function (head,req) {
      fn_tojson_format(1,2, 'delegations', 'delegation');
    },
    'all_circonscription_json' : function (head,req) {
      fn_tojson_format(0,1, 'circonscriptions', 'circonscription');
    },
    'all_api_json' : function (head,req) {
      fn_tojson_format(0,1, 'apis', 'api', 'version', 'endpoints');
    },
    'api_json' : function (head,req) {
      fn_setcharset();
      var row = getRow(); 
      delete row.value._id; 
      delete row.value._rev;
      var rtn = {}; 
      rtn.endpoints = row.key[1]; 
      send (toJSON(rtn));
    },
    'liste_json' : function (head,req) {
      fn_setcharset();
      var row = getRow(); 
      delete row.value._id; 
      delete row.value._rev;
      send (toJSON(row.value));
    },
    'all_liste_json' : function (head,req) {
      fn_setcharset();
      var rtn = {}; 
      rtn.listes = []; 
      while(row = getRow()) { 
        var value = row.key; 
        var liste = {}; 
        liste.name = value; 
        rtn.listes.push(liste);
      } 
      send (toJSON(rtn));
    }
};
