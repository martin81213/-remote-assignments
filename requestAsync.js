// requestAsync.js
const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const https = require("https");
const axios = require('axios');

function requestCallback(url, callback) {
    const startTime = performance.now();

    fetch(url)
        .then(response => response.text())
        .then(data => {
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            callback(`Execution Time: ${executionTime} milliseconds`);
        })
        .catch(error => {
            callback(`Error: ${error}`);
        });
}

function requestPromise(url) {
    const startTime = performance.now();
    return new Promise((resolve,reject)=>{    
        axios.get(url)
            .then((response)=>{
                const endTime = performance.now();
                const executionTime = endTime - startTime;
                resolve(`Execution Time: ${executionTime} milliseconds`);
            })
    })
    // write code to request url asynchronously with Promise
}
async function requestAsyncAwait(url) {
    try{
        const result = await requestPromise(url);
        console.log(result);
    }catch(error){
        console.log(error(`Error: ${error.message}`));
    }

    // write code to request url asynchronously
    // you should call requestPromise here and get the result using async/await.
}
requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log); 
requestAsyncAwait(url); 

