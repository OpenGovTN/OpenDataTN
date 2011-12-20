/**
 * Views to be exported from the design doc.
 */
module.exports = {
    'all_datasets': {
        'map': function(doc) {
          if (doc.name && 
              doc.date) {
            emit([
              doc._id, 
              doc.name, 
              doc.date
              ], 
              1
            );
          }
        },
        'reduce': function (key, values) {
          return true;
        }
    },
    'dataset': {
           'map': function(doc) {
             if (doc.name && 
               doc.api && 
               doc.api.version) {
               emit([
                 doc._id,
                 doc.name, 
                 doc.api.version
                 ],
                 1
               );
             }
           },
           'reduce': function (keys, values) { 
             return sum(values);
           }
    }
};
