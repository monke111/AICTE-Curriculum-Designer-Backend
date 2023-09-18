import 'dotenv/config';

import express,{NextFunction,Request,Response} from 'express';

export const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
}
);

//undefined port why?

