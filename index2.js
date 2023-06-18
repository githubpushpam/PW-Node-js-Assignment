// 4. In this coding challenge, you will continue working with the file created in the previous assignments& Here your task is to access the existing nodejs_architecture&txt file and use the fs module to append additional data to it& Specifically, add some advantages of Node&js to the file and print the file content to the console.

const fs = require('fs');

const advantage = 'Node js has distinct advantages. Its asynchronus model and non blocking i/o operation improve the scalability and and performance of web applications built on other frameworks. Node.js can easily handle multiple client request without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.';

fs.appendFile('nodejs_architecture.txt', advantage ,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(advantage);
    }
})
