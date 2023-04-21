import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "cfe7e6eb84ddf9",
        pass: "5f02842aaa0536"
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}