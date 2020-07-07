# Getting Started

## Installation

### Install Homebrew
Windows:
Install Windows Subsystem for Linux https://docs.microsoft.com/en-us/windows/wsl/install-win10, then proceed using the Linux instructions

Mac:
Install [Homebrew](https://brew.sh/)

Linux:
Install [Homebrew for Linux](https://docs.brew.sh/Homebrew-on-Linux)

### Install Node/NPM

In a CLI,
```
brew install nvm
nvm install 12
nvm use 12
```


## Package Setup

```
npm install
npm run start
```

You'll see a website at http://localhost:3000

### Adding Things

To install libraries, use NPM - for example

```
npm install --save aws-sdk
```

## Package Overview
- The main application runs from 'index.js', you can see server configuration and server startup
- package.json -> scripts - this is where the "start" command is defined
- "views" are handlebars templates rendered by the server
- "static" is where client-side javascript (the alert) live.
