const async = require('async');

var stuff = ['hello', 'there', 'world'];

function doingStuff(thing, callback) {
    console.log(`Doing stuff to thing: ${thing}`);
    thing += ' modified';
    callback(null, thing);
}

async.map(stuff, doingStuff, (err, results) => {
    console.log(`stuff: ${results}`);
});