import nodemailer from "nodemailer";

import { EMAIL_USER,EMAIL_PASSWORD } from "./env.js";

export const accountMail = EMAIL_USER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountMail,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
