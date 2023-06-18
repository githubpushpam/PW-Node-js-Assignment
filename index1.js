// question3. Continuing assignment 2. Here, let’s create a new file named index&js anduse the fs module to read the content of nodejs_architecture&txt and print the content to the console& 

const fs = require('fs');

fs.readFile('nodejs_architecture.txt', (err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});