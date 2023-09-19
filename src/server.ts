import mongoose from 'mongoose';
import { app } from './index';
import env from './utils/validateEnv';

const port = env.PORT;

//* !-> non-null

mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log("Mongoose connected");
  app.listen(port,() => {
    console.log('Server running on port: '+ port);});
  }
  ).catch(
    console.error
  );