// Question9 - 0 While working with the events module, one interesting observation is that when an event is created and called, the associated event handler is triggered1 However, what happens if we remove an event and then try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event handler and observe what happens when we call it0
const events = require('events');

const eventEmitter = new events.EventEmitter();

const eventHandler = () => {
  console.log("Event handler called.");
};

eventEmitter.on('myEvent', eventHandler);
eventEmitter.emit('myEvent');

eventEmitter.removeListener('myEvent', eventHandler);
eventEmitter.emit('myEvent');

eventEmitter.on('myEvent', eventHandler);
eventEmitter.emit('myEvent');
