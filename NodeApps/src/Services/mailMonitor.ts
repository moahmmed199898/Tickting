import Pop3Command from 'node-pop3';
import { ParsedMail, simpleParser } from "mailparser"

export function startMailMonitor(callback: (message: ParsedMail) => Promise<void>) {
    const pop3 = new Pop3Command({
        user: process.env.POP_USERNAME as string,
        password: process.env.POP_PASSWORD as string,
        host: process.env.POP_HOST as string,
        port: process.env.POP_PORT as unknown as number,
        tls: true
    });



    setInterval(async () => {
        // get a list of the mails 
        const messageList = await pop3.UIDL()

        if (messageList.length > 0) {
            // read them one at a time
            for (const messageInfo of messageList) {
                const message = await pop3.RETR(messageInfo[0] as unknown as number)
                const parsed = await simpleParser(message)
                // send them to the call back 
                await callback(parsed)
            }
        }
        await pop3.QUIT();
    }, 1000 * 60 * (process.env.INTERVAL as unknown as number || 2)) // 2 minutes is the default if no interval is specified

}
