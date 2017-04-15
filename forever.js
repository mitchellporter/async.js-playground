const async = require('async');

async.forever(function(next) {
    console.log('forever'); 
    next();
}, function(err) {
    console.log('There was an error :P');
});