const express = require('express');
const request = require('request');
const app = express();
const port = 5000;
const Main = require('./main');

const main = new Main();
app.get("/getPDF", (req)=> {
   main.createPDF(req).then((res) => {
    return res.data.pagination.totalAvailable > 0 && response.data.projects.project[0].id;
  });
})