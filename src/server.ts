import mongoose from 'mongoose';
import app from './app';
import config from './app/config/config';


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Log => Connected with database!")
    app.listen(config.port, () => {
      console.log(`Log => Server is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();