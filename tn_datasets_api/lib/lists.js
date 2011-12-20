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

var fn_tojson_format = function(index1, index2, array_name, element_name, name1, name2) {
      name1 = typeof(name1) != 'undefined' ? name1 : 'code';
      name2 = typeof(name2) != 'undefined' ? name2 : 'name';
      fn_setcharset();
      var rtn = {}; 
      rtn[array_name] = []; 
      while(row = getRow()) { 
        log(row.key);
        var value = row.key; 
        rtn[element_name] = {}; 
        rtn[element_name][name1] = value[index1]; 
        rtn[element_name][name2] = value[index2]; 
        rtn[array_name].push(rtn[element_name]);
      } 
      delete rtn[element_name];
      send (toJSON(rtn));
};

module.exports = {
    'dataset_json': function (head,req) {
      fn_tojson_format(1,2, 'datasets', 'dataset', 'description', 'version' );
    },
    
    // Wish I could parametrize the function above to take 3 indexes
    'all_dataset_json': function (head,req) {
      fn_setcharset();
      var rtn = {}; 
      rtn.datasets = []; 
      while(row = getRow()) { 
        var value = row.key; 
        var dataset = {}; 
        dataset.name = value[0]; 
        dataset.description = value[1]; 
        dataset.date = value[2]; 
        rtn.datasets.push(dataset);
      } 
      send (toJSON(rtn));
    }
};
