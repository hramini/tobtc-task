import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import { join } from 'path';
import { apiRouter } from './router/api-router';
import { webRouter } from './router/web-router';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(json());
app.use(urlencoded());

app.use('/dist/', express.static(join(__dirname, '../front/dist/')));
app.use('/', webRouter);
app.use('/api', apiRouter);

app.listen(port, async (): Promise<void> => {
  console.log(`Project is listening to ${port}`);

  try {
    await connect('mongodb://localhost:27017/tobtc-test');

    console.log('The application is connected to database successfully');
  } catch (error) {
    console.log('Error in connection to database');
  }
});
