#!/usr/bin/env node
// Create HTTP server using express

const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1', () => console.log('app is running'));

module.exports = app;
