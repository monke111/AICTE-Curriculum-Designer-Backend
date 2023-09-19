import 'dotenv/config';

import express from 'express';
const usersRoutes = require('./routes/users')
export const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
}
);

app.use('/api/users', usersRoutes)


