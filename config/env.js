import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local`})

export const { PORT,SERVER_URL,NODE_ENV,DB_URL,JWT_SECRET,JWT_EXPIRES_IN,ARCJET_KEY,ARCJET_END,QSTASH_TOKEN,QSTASH_URL,EMAIL_PASSWORD,EMAIL_USER } = process.env;