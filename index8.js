// Question10-du0 In continuation of the 8th question, let's now explore the concept of the maximum number of listeners allowed for event handlers1 For this coding challenge, your task is to determine the current maximum number of event listeners associated with an event and then set the maximum number of event listeners to 5. Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners to 5.

const events = require('events');

const eventEmitter = new events.EventEmitter();

// Get the current maximum number of event listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current maximum number of event listeners:', currentMaxListeners);

// Set the maximum number of event listeners to 51
eventEmitter.setMaxListeners(5);

// Verify the updated maximum number of event listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log('Updated maximum number of event listeners:', updatedMaxListeners);
