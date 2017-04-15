const async = require('async');

const first = function(callback) {
    console.log('executing first');
    setTimeout(() => {
        callback(null, 'first');
    }, 4000);
};

const second = function(callback) {
    console.log('executing second');
    setTimeout(() => {
        callback(null, 'second');
    }, 2000);
};

const third = function(callback) {
    console.log('executing third');
    setTimeout(() => {
        callback(null, 'third');
    }, 3000);
};

async.series([first, second, third], (err, results) => {

});