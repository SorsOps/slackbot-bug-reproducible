import { AwsLambdaReceiver } from '@slack/bolt';

const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET!;
export const receiver = new AwsLambdaReceiver({
    signingSecret: SLACK_SIGNING_SECRET,
});