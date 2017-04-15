const async = require('async');
const stuff = ['hello', 'there', 'world'];

const first = function(strings, callback) {
    console.log(`first func with arguments: ${strings}`);
    callback();
}

const second = function(strings, callback) {
    console.log(`second func with arguments: ${strings}`);
    callback();
}

const third = function(strings, callback) {
    console.log(`third func with arguments: ${strings}`);
    callback();
}

async.applyEach([first, second, third], ['lol', '123', 'hahah'], (err) => {
    console.log('finsihed running all functions');
})