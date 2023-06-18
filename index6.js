// Question8 - F0 Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom event named "subscribe". When this event is triggered, it should display a message in the console indicating that the user has subscribed.

const events = require('events');

const eventEmitter = new events.EventEmitter();

const subscribeHandler = ()=>{
    console.log("Thanks fo subscribing to College Wallah.");
};

eventEmitter.on('subscribe', subscribeHandler);
eventEmitter.emit('subscribe');
