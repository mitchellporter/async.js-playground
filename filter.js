const async = require('async');
const stuff = ['hello', 'there', 'world', 'hksahdhgajkshdjkha'];

function filterStuff(thing, callback) { 
    if (thing.length > 5) return callback(null, thing);
    callback();
};

async.filter(stuff, filterStuff, (err, results) => {
    console.log(`filter results: ${results}`);
});