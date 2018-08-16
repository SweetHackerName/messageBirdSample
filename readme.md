# Simple Text Message Sender
## Purpose

This application is designed as a simple test and implementation of the [MessageBird SMS Messaging API](https://developers.messagebird.com/docs/sms-messaging).  It contains a single button that can but used to send a text defined in the method to any number. Assuming it is being used with a sample API key from MessageBird, that number must match the number in your api settings or it won't work.

## Installation and configuration

Clone the git repository to your local system and run NPM install.

In order to not publish API keys, this uses an environment varable of MESSAGEBIRD_API_KEY.

Set that variable to your API key either for a single session by running on the command lines
```bash
MESSAGEBIRD_API_KEY = yourkey
```
or permanently by editing your ~/.bashrc or ~/.profile files to include the variable.
