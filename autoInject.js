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

function createTaskInvitations(createTask, callback) {
    console.log(`task? ${createTask.assignees[0].username}`);
    callback(null);
}

function sendTaskInvitationEmails(createTask, callback) {
    console.log(`task? ${createTask.assignees[0].username}`);
    callback(null);
};

async.autoInject({
    createTask: createTask,
    createTaskInvitations: createTaskInvitations,
    sendTaskInvitationEmails: sendTaskInvitationEmails
}, (err, results) => {
    console.log(`results: ${results}`);
});
