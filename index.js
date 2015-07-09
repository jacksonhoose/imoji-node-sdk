var _ = require('lodash'),
    ImojiClient = require('./lib/client'),
    ImojiConstants = require('./lib/constants');

var Request = function (options) {
    this._client = new ImojiClient(
        options.apiKey,
        options.apiSecret,
        options.apiVersion || ImojiConstants.APIVersion
    );
};

_.extend(Request.prototype, {
    featured: function () {
        return this._client.getCall(ImojiConstants.Endpoints.Featured);
    },
    categories: function () {
        return this._client.getCall(ImojiConstants.Endpoints.Categories);
    },
    search: function (options) {
        return this._client.getCall(ImojiConstants.Endpoints.Search, options);
    },
    random: function (options) {
        return this._client.getCall(ImojiConstants.Endpoints.Random, options);
    }
});

module.exports = Request;
