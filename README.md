# imoji-node-sdk
Node.js SDK for Imoji

```
var Imoji = require("imoji-node"),
    imojiClient = new Imoji({
    apiKey: 'apiKey',
    apiSecret: 'apiSecret'
});
```

```
imojiClient.search({
        query: 'cats'
    })
    .then(function(searchResults) {
        searchResults.results.forEach(function(result) {
            console.log("Imoji image %s", result.preRendered.png.thumbImage);
        });
    });
```
