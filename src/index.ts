import { Express } from 'express';
import express from 'express';
const cors = require('cors');
// const whitelist = ['http://localhost:3000', 'http://192.168.200.149:3000, http://localhost:3001'];
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config();
import routes from '@/routes/index.route';
export const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  // eslint-disable-next-line @typescript-eslint/ban-types
  origin: (origin:string, callback: Function) => {
    // if(whitelist.indexOf(origin) !== -1) {
    //   callback(null, true);
    // }
    // else {
    //   callback(new Error('Not allowed by CORS'));
    // }
    callback(null, true);
  },
  credentials: true
}));
app.use(express.json());
app.use('/api', routes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});