/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {
        to: '_list/dataset_json/dataset',
        from: ':dataset',
        query: {
            'group': 'true',
            'startkey': [
                ':dataset'
            ],
            'endkey': [
                ':dataset',
                {
                }
            ]
        }
    },
    {
        to: '_list/all_dataset_json/all_datasets',
        from: '',
        query: {
            'group': 'true'
        }
    },
    {
        to: 'index.html',
        from: '*'
    },
    {from: '/static/*', to: 'static/*'},
//    {from: '/', to: '_show/welcome'},
//    {from: '*', to: '_show/not_found'}
];
