const EventEmitter = require('events');

// create EventEmitter object
const user = new EventEmitter();

// event handler for 'login' event
user.on('login', (username) => {
  console.log(`${username} has logged in.`);
});
// Another event handler for 'login' event
user.on('login', (username) => {
  console.log(`Welcome, ${username}!`);
});
// event handler for 'logout' event
user.on('logout', (username) => {
  console.log(`${username} has logged out.`);
});


user.emit('login', 'Rahul');


user.emit('logout', 'Rahul');


