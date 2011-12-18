/**
 * Rewrite settings to be exported from the design doc
 */
var version = "v1";

module.exports = [
    {from: version + '/bureau/:circonscription/:delegation/:centre_vote/:bureau_vote', 
     to: '_list/bureau_json/bureau_vote',
     query: { 'key' : [
         ":bureau_vote",
         ":centre_vote",
         ":delegation",
         ":circonscription"
       ]
     } 
    },
    {from: version + '/centre/:circonscription/:delegation/:centre_vote', 
     to: '_list/centre_json/centre_vote',
     query: { 
       'startkey' : [
         ":centre_vote",
         ":delegation",
         ":circonscription"
       ],
       'endkey' : [
         ":centre_vote",
         ":delegation",
         ":circonscription",
         {}
       ],
       'group' : 'true'
     }
    },
    {from: version + '/delegation/:circonscription/:delegation', 
     to: '_list/delegation_json/delegation',
     query: { 
       'startkey' : [
         ":delegation",
         ":circonscription"
       ],
       'endkey' : [
         ":delegation",
         ":circonscription",
         {}
       ],
       'group' : 'true'
     } 
    },
    {from: version + '/circonscription/:circonscription', 
     to: '_list/circonscription_json/circonscription',
     query: { 
       'group' : 'true',
       'startkey' : [
         ":circonscription"
       ],
       'endkey' : [
         ":circonscription",
         {}
       ]
     } 
    },
    {from: version + '/circonscription', 
     to: '_list/all_circonscription_json/all_circonscription',
     query: { 
       'group' : 'true'
     } 
    },
    {from: version + '/liste', 
     to: '_list/all_liste_json/all_listes',
     query: { 
       'group' : 'true'
     } 
    },
    {from: '', 
     to: '_list/all_api_json/all_apis',
     query: { 
       'group' : 'true'
     } 
    },
    {from: ':api', 
     to: '_list/api_json/all_apis',
     query: { 
       'startkey' : [
         ":api"
       ],
       'endkey' : [
         ":api",
         {}
       ],
       'group' : 'true'
     } 
    },
    {from: '/static/*', to: 'static/*'},
//    {from: '*', to: '_show/not_found'},
    {from: '/', to: '_show/welcome'}
];
