// pull local environment variables


import express from "express";
import { PORT } from './constants.js'

const app = express()

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(PORT, () => {
  console.log('Application is listening on', PORT);
});

export default app;