import mongoose from 'mongoose';

const { DB_NAME, DB_PASSWORD, DB_HOST } = process.env;

const encodedPassword = DB_PASSWORD ?? '';

mongoose.connect(`mongodb+srv://${DB_NAME}:${encodedPassword}@${DB_HOST}/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
