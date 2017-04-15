const async = require('async');
const stuff = ['hello', 'there', 'world'];

async.every(stuff, (thing, callback) => {
    callback(null, true);
}, (err, result) => {
    console.log(`All things true? ${result}`);
});