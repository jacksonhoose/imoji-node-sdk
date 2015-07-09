var imojiClient = new (require('../index'))({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
}), assert = require('assert');


(function () {
    imojiClient.search({
        query: 'cats'
    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.results, null, 'Search for cats has results');

        return imojiClient.featured();

    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.results, null, 'Featured has results');

        return imojiClient.categories();

    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.categories, null, 'Categories has results');

        return imojiClient.random();

    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.results, null, 'Random has results');

        return results;

    }).then(function () {
        console.log('Tests passed successfully');
        return true;
    }).catch(function (error) {
        console.error(error);
    });
})();
