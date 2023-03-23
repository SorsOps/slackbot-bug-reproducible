import { App, directMention, BotMessageEvent, LogLevel } from '@slack/bolt';
import { receiver } from './receiver';

/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/

// Initializes your app with your bot token and app token
export const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver,
    socketMode:false,
    // developerMode: true,
    logLevel: LogLevel.DEBUG
});

app.message('ping', async ({ message, say, ack }) => {
    //@ts-ignore
    await ack();
    // say() sends a message to the channel where the event was triggered
    await say(`pong`)
});

export { receiver } from './receiver';