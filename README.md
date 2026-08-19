# mee7

A small Slack bot built with Node.js and Slack Bolt. mee7 provides simple commands for checking latency and getting random facts, jokes, quotes, and animals.

## Commands

| Command         | Description               |
| --------------- | ------------------------- |
| `/mee7-ping`    | Check bot latency         |
| `/mee7-catfact` | Get a random cat fact     |
| `/mee7-dog`     | Get a random dog image    |
| `/mee7-joke`    | Get a random joke         |
| `/mee7-fact`    | Get a random useless fact |
| `/mee7-quote`   | Get a random quote        |
| `/mee7-help`    | Show available commands   |

## APIs

The APIs used by mee7 are sourced from the [Free APIs](https://free-apis.github.io/) directory.

* Cat Fact API — `catfact.ninja`
* Dog CEO API — `dog.ceo`
* JokeAPI — `v2.jokeapi.dev`
* Useless Facts API — `uselessfacts.jsph.pl`
* DummyJSON — `dummyjson.com`

## Setup

Install the dependencies:

```bash
npm install
```

Create a `.env` file containing your Slack credentials:

```env
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...
```

Start the bot with:

```bash
node index.js
```

mee7 uses Slack Socket Mode, so no publicly accessible HTTP endpoint is required.

### 24/7 Hosting

For continuous operation, mee7 can be hosted on [Nest](https://nest.hackclub.com) using `systemd`.

Clone the repository onto your Nest server, install the dependencies, configure the `.env` file, and create a `systemd` service that runs `node index.js` with `Restart=always`. This keeps mee7 running in the background and automatically restarts it if the process crashes or the server reboots.

See the [Nest Quickstart Guide](https://guides.hackclub.app/index.php/Quickstart) for information about accessing a Nest server.
