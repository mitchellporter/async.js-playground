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

var async_functions = async.reflectAll([first, second, third, fourth]);
async.parallel(async_functions, (err, results) => {
    console.log(`Error: ${err}`);
    console.log(`Results length: ${results.length}`);

    async.map(results, (result, callback) => {
        if (result.error) console.log(`We can handle error logging here: ${result.error}`);
        callback();
    });
});