// R% In the same project directory created in the above assignment, your task is to create a new file index&js and using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below are the expected files in the project folder&

const fs = require('fs');

// Information about node.js architecture 
const architectureInfo = 'Node.js is built on Chrome\'s V8 JavaScript engine and uses an event-driven, non-blocking I/O model. It is designed to build scalable network applications and is widely used for server-side development.';

// Writing architecture information to new file
fs.writeFile('nodejs_architecture.txt', architectureInfo, (err)=>{
 if(err){
    console.log('Error writing file :', err);
 }
 else{
    console.log('architecture information saved to nodejs_architecture.txt');
 }
});