const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', handlePost);
app.listen(port, () => console.log(`listening to port ${port}...`));

function handlePost(req, res){  
  let result = getMatch(req.body.string, req.body.pattern);
  res.set("Content-Type", "application/json")
  res.write(JSON.stringify(result));
  res.end();
}

function getMatch(target, pat) {
  let reg = new RegExp(pat, "g");  
  return target.match(reg);
}

