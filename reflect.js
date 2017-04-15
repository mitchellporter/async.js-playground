const async = require('async');

function first(callback) {
    // Everything goes perfectly
    callback(null, 'first result');
}

function second(callback) {
    // Something goes wrong
    callback('error happened');
}

function third(callback) {
    // Everything goes perfectly
    callback(null, 'third result');
}

function fourth(callback) {
    // Everything goes perfectly
    callback(null, 'fourth result');
}

async.parallel([
    async.reflect(first),
    async.reflect(second),
    async.reflect(third),
    async.reflect(fourth)
], (err, results) => {
    console.log(`Error: ${err}`);
    console.log(`Results length: ${results.length}`);

    async.map(results, (result, callback) => {
        if (result.error) console.log(`We can handle error logging here: ${result.error}`);
        callback();
    });
});