exports.views = {
    all_datasets: {
        map: function(doc) {
          if (doc.name && doc.date) {
            emit([doc._id, doc.name, doc.date], 1);
          }
        },
        reduce: function (key, values) {
          return true;
        }
    },
    dataset: {
           map: function(doc) {
             if (doc.name && doc.api && doc.api.version) {
               emit([doc._id,doc.name, doc.api.version], 1);
             }
           },
           reduce: function (keys, values) { 
             return sum(values);
           }
    }
};

exports.lists = {
    dataset_json: function (head,req) {
      start(
        { 
          "headers": { "Content-Type": "text/plain;charset=utf-8"} 
        }
      ); 
      var results = []; 
      while(row = getRow()) { 
        var value = row.key; 
        results= { "dataset": value[1],"version": value[2]}; 
      } 
      send (JSON.stringify(results));
    },
    all_dataset_json: function (head,req) {
      start(
        { "headers": { "Content-Type": "text/plain;charset=utf-8" } }
      ); 
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

exports.rewrites = [
       {
           "to": "_list/dataset_json/dataset",
           "from": ":dataset",
           "query": {
               "group": "true",
               "startkey": [
                   ":dataset"
               ],
               "endkey": [
                   ":dataset",
                   {
                   }
               ]
           }
       },
       {
           "to": "_list/all_dataset_json/all_datasets",
           "from": "",
           "query": {
               "group": "true"
           }
       },
       {
           "to": "index.html",
           "from": "*"
       }
];
