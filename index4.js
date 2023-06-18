//Question6-Assume a situation where our server restricts access to its configuration via the user interface& The only way to obtain the OS and release information is through a programmatic approach& In this challenge, you are expected to use the os module and print the os name and the os"release version to the console.

const os = require('os');

const osName = os.type();
const osRelease = os.release();

console.log('OS Name: ',osName);
console.log('OS Release: ', osRelease);