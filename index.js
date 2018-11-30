const express =  require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', testOutput);
app.post('/', observeReq);
app.listen(port, () => console.log(`listening to port ${port}...`));

function testOutput(req, res) {
  let temp = {id: 1, obj: {color: 'red', weight: 12}};
  res.write(JSON.stringify(temp));
  res.end('\nBye');
}

function observeReq(req, res) {
  let text = 'method: ' + JSON.stringify(req.method) + '\n\n' +
    'headers: ' + JSON.stringify(req.headers) + '\n\n' +
    'params: ' + JSON.stringify(req.params) + '\n\n' +
    'query: ' + JSON.stringify(req.query) + '\n\n' +
    'body: ' + JSON.stringify(req.body);
  
  res.write(text);
  res.end("\nBye");

  logToFile(text);
}

function logToFile(text) {
  fs.writeFile('req.txt', text, err => {if(err){throw err;}});
}