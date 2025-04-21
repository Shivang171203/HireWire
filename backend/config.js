import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51RFtAMHFCbjjrjGGDUrXs6oOE8T0SxtcNTnYVz0Uy8ChBlrN4AA75LZIj9BwQ9YliKQ2t0isP11iHCZFwPYJbL6800qLFGtoFS";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};
