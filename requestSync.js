const request = require('sync-request');

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestSync(url) {
  const startTime = new Date();

  const response = request('GET', url);

  const endTime = new Date();
  const executionTime = endTime - startTime;

  console.log(`Execution time: ${executionTime} ms`);
}

requestSync(url);
requestSync(url);
requestSync(url);

