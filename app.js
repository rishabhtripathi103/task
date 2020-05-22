var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var ejs=require('ejs');
var path = require('path');
var ndjson=require('ndjson');
var app=express();

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
fs.createReadStream('data.txt').pipe(ndjson.parse()).on('data', function(obj)
{
  console.log(obj);
})
app.get('/',function(req,res)
{
  res.render('index');
});

app.listen(3000);
