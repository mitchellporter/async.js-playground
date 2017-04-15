const async = require('async');
const stuff = ['hello', 'there', 'world'];

const doStuff = function (thing, callback) {
    callback(null, [thing]);
}

async.concat(stuff, doStuff, (err, results) => {
    console.log(`results: ${results}`);
});