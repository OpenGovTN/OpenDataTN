/**
 * Views to be exported from the design doc.
 */

module.exports = {
   'all_circonscription' : {
     'map' : function(doc) {
       if (doc.circonscription && doc.circonscription.code && doc.circonscription.name) {
         emit([
           doc.circonscription.code, 
           doc.circonscription.name
         ], 
         1
         );
       }
     },
     'reduce' : function (key, values) {
       return true;
     }
   },
   'circonscription' : {
     'map' : function(doc) {
       if (doc.circonscription && 
           doc.circonscription.code && 
           doc.delegation && 
           doc.delegation.code && 
           doc.delegation.name) {
             emit([
               doc.circonscription.code, 
               doc.delegation.code, 
               doc.delegation.name
               ], 
               1
             );
       }
     },
     'reduce' : function (key, values) {
       return sum(values);
     }
   },
   'delegation' : {
     'map' : function(doc) {
       if (doc.circonscription && 
           doc.circonscription.code && 
           doc.delegation && 
           doc.delegation.code && 
           doc.centre_vote && 
           doc.centre_vote.code && 
           doc.centre_vote.name) {
             emit([
               doc.delegation.code,
               doc.circonscription.code, 
               doc.centre_vote.code, 
               doc.centre_vote.name
               ], 
               1
             );
       }
     },
     'reduce' : function (key, values) {
       return sum(values);
     }
   },
   'centre_vote' : {
     'map' : function(doc) {
       if (doc.circonscription && 
           doc.circonscription.code && 
           doc.delegation && 
           doc.delegation.code && 
           doc.centre_vote && 
           doc.centre_vote.code && 
           doc.bureau_vote && 
           doc.bureau_vote.code && 
           doc.bureau_vote.name) {
             emit([
               doc.centre_vote.code, 
               doc.delegation.code, 
               doc.circonscription.code, 
               doc.bureau_vote.code, 
               doc.bureau_vote.name
               ], 
               1
             );
       }
     },
     'reduce' : function (key, values) {
       return sum(values);
     }
   },
   'bureau_vote' : {
     'map' : function(doc) {
       if (doc.circonscription && 
           doc.circonscription.code && 
           doc.delegation && 
           doc.delegation.code && 
           doc.centre_vote && 
           doc.centre_vote.code && 
           doc.bureau_vote && 
           doc.bureau_vote.code) {
             emit([
               doc.bureau_vote.code, 
               doc.centre_vote.code, 
               doc.delegation.code, 
               doc.circonscription.code
               ], 
               doc
             );
       }
     }
   },
   'liste' : {
     'map' : function(doc) {
       if (doc.circonscription && 
           doc.circonscription.code && 
           doc.delegation && 
           doc.delegation.code && 
           doc.centre_vote && 
           doc.centre_vote.code && 
           doc.bureau_vote && 
           doc.bureau_vote.code &&
           doc.resultat &&
           doc.resultat.listes &&
           (doc.resultat.listes.length != 0)) {
             for (var i=0; i < doc.resultat.listes.length; i++) {
               if (doc.resultat.listes[i].name &&
                   doc.resultat.listes[i].vote) {
                     emit([
                       doc.resultat.listes[i].name,
                       doc.bureau_vote.code, 
                       doc.centre_vote.code, 
                       doc.delegation.code, 
                       doc.circonscription.code
                       ], 
                       doc.resultat.listes[i].vote
                     );
               }
             }
           }
     },
     'reduce' : function (key, values) {
       return sum(values);
     }
   },
   'all_listes' : {
     'map' : function(doc) {
       if (doc.resultat &&
           doc.resultat.listes &&
           (doc.resultat.listes.length != 0)) {
             for (var i=0; i < doc.resultat.listes.length; i++) {
               if (doc.resultat.listes[i].name) {
                     emit(
                       doc.resultat.listes[i].name, 1
                     );
               }
             }
           }
     },
     'reduce' : function (key, values) {
       return true;
     }
   },
   'all_apis' : {
     'map' : function(doc) {
       if (doc.api && 
           doc.api.version && 
           doc.api.endpoints) {
             emit([
               doc.api.version,
               doc.api.endpoints
               ],
               1
             );
           }
     },
     'reduce' : function (key, values) {
       return true;
     }
   }
}; 
