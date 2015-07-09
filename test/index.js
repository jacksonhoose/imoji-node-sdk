var imojiClient = new (require("../index"))({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
}), assert = require('assert');


(function () {
    imojiClient.search({
        query: 'cats'
    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.results, null, 'Search for cats has results');

        return imojiClient.getFeatured();

    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.results, null, 'Search for cats has results');

        return imojiClient.getCategories();

    }).then(function (results) {
        assert.equal(results.status, 'SUCCESS', 'Imoij server response status');
        assert.notEqual(results.categories, null, 'Search for cats has results');

        return results;

    }).then(function () {
        console.log("Tests passed successfully");
        return true;
    }).catch(function (error) {
        console.error(error);
    });
})();
