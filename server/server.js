const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
//const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/save', (req, res) => {
  res.send({ message: 'Data saved successfully2' });

  // const htmlContent = req.body.content;
  // const filePath = path.join(__dirname, 'assets', 'content.html');
  // fs.writeFile(filePath, htmlContent, (err) => {
  //   if (err) {
  //     return res.status(500).send('Error saving file');
  //   }
  //   res.send('File saved successfully');
  // });
});

app.get('/load', (req, res) => {
  res.send({ message: 'Data loaded successfully1' });
  
  // const filePath = path.join(__dirname, 'assets', 'content.html');
  // fs.readFile(filePath, 'utf8', (err, data) => {
  //   if (err) {
  //     return res.status(500).send('Error loading file');
  //   }
  //   res.send(data);
  // });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});