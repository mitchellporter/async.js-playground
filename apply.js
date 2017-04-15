const async = require('async');

function doStuff(string1, string2, callback) {
    console.log(`string1: ${string1}`);
    console.log(`string2: ${string2}`);
    callback();
}

async.parallel([async.apply(doStuff, 'Hello', 'Lulz')],

(err, results) => {
    console.log(`results: ${results}`);
});
