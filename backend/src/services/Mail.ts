import nodemailer from "nodemailer"
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT as unknown as number,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });


  console.log(transporter)


export async function sendEmail(recipient: string, subject: string, html: string) {

    const message = {
        from: process.env.SMTP_USERNAME,
        to: recipient,
        subject: subject,
        html: html
    }

    transporter.sendMail(message, (error, info) => {
        if (error) console.log(error)
        else console.log("message sent");


    })

}
