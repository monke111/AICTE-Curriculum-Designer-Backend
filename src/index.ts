import 'dotenv/config';

import express from 'express';
const usersRoutes = require('./routes/users')
export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
}
);

app.use('/api/users', usersRoutes)


