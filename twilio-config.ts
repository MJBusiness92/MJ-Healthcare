import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER as string;

const client = new Twilio(accountSid, authToken);

export const sendSMS = async (to: string, body: string) => {
  try {
    const message = await client.messages.create({
      body,
      from: twilioPhoneNumber,
      to,
    });
    console.log("SMS enviado com sucesso:", message.sid);
    return message;
  } catch (error) {
    console.error("Erro ao enviar SMS:", error);
    throw error;
  }
};
