var events = require('events');
var eventEmitter = new events.EventEmitter();

function myEventHandler() {
	console.log('Hi, How are you?');
}

eventEmitter.on('hi', myEventHandler);

eventEmitter.emit('hi');