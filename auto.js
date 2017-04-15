const async = require('async');

function createTask(callback) {

    const jeff = { username: 'jeff', email: 'jeff@async.js' };
    const steve = { username: 'steve', email: 'steve@async.js' };
    const ron = { username: 'ron', email: 'ron@async.js' };

    const assignees = [jeff, steve, ron];
    const task = { 
        title: 'Test Task',
        assignees: assignees 
    };
    callback(null, task);
}

const createTaskInvitations = ['createTask', function (results, callback) {
    console.log(`results: ${Object.keys(results)}`);
    console.log(`task? ${results.createTask.assignees[0].username}`);
    callback(null);
}];

const sendTaskInvitationEmails = ['createTask', function (results, callback) {
    console.log(`results: ${Object.keys(results)}`);
    console.log(`task? ${results.createTask.assignees[1].username}`);
    callback(null);
}];

async.auto({
    random: async.constant('https://server.net/'),
    createTask: createTask,
    createTaskInvitations: createTaskInvitations,
    sendTaskInvitationEmails: sendTaskInvitationEmails
}, (err, results) => {
    console.log(`results: ${results}`);
});
