const express = require('express')
const app = express()
const port = 3000
//const appid = process.env.APPID;

const https = require('https')
const path = require('path')
const fs = require('fs')


app.get('/', function (req, res) {
const { exec } = require('child_process');
exec('bin/001', (err, stdout, stderr) => {
  if (err) {
    return res.send(`${stderr}`);
  }
  return res.send(`${stdout}`);
});
});

app.get('/aws', function (req,res) {
const { exec } = require('child_process');
exec('bin/002', (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/docker', function (req,res) {
const { exec } = require('child_process');
exec('bin/003', (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/loadbalanced', function (req,res) {
const { exec } = require('child_process');
exec('bin/004 ' + JSON.stringify(req.headers), (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/tls', function (req,res) {
const { exec } = require('child_process');
exec('bin/005 ' + JSON.stringify(req.headers), (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

app.get('/secret_word', function (req,res) {
const { exec } = require('child_process');
exec('bin/006 ' + JSON.stringify(req.headers), (err, stdout, stderr) => {
  return res.send(`${stdout}`);
});
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  },
  app
)


sslServer.listen(3443, () => console.log('Secure server 🚀🔑 on port 3443'))

app.listen(port, () => console.log(`Rearc quest listening on port ${port}!`))
//app.listen(appid, () => console.log(`Rearc quest listening on port ${appid}!`))
