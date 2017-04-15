const async = require('async');
const stuff = ['hello', 'there', 'world'];

async.detect(stuff, (thing, callback) => {
    console.log(`thing: ${thing}`);
    callback(null, true);
}, (err, result) => {
    console.log(`result: ${result}`);
});