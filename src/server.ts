import express from 'express';
import cors from 'cors';
import path from 'path';

import logger from './config/logger';
import indexRouter from './routes/index';
import eventRouter from './routes/event';
import memberRouter from './routes/member'; 
import scheduleRouter from './routes/schedule';
import testRouter from './routes/test';

const app = express();

app.use(cors());

app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', eventRouter);
app.use('/', scheduleRouter);
app.use('/', memberRouter);
app.use('/', testRouter);


app.listen(5000, () => {
    console.log("server is running on port 5000") 
});

