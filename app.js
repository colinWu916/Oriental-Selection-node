const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const apiRouter = require('./apiRouter');

app.use('/api', apiRouter)
app.listen(3000, () => {
  console.log('express server start!')
})