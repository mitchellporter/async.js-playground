const async = require('async');
const stuff = ['hello', 'there', 'world'];

async.each(stuff, (thing, callback) => {
    console.log(`doing stuff to thing: ${thing}`);
    callback(null, thing);
}, (err) => {
    if (!err) return console.log('no errors');
});