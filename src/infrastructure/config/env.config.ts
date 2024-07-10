const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || "";
const JWT_SECRET = process.env.JWT_SECRET || "";
const NODE_ENV = process.env.NODE_ENV || "";
const COOKIE_SECRET = process.env.COOKIE_SECRET || "";

export const envVariables = {
  PORT,
  MONGO_URI,
  JWT_SECRET,
  NODE_ENV,
  COOKIE_SECRET,
};
