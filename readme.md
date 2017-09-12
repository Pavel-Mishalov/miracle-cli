# Miralce CLI

This is the command-line:

## Requirements

You'll need the following software installed to get started.

  * [Node.js](http://nodejs.org) 0.12+: Use the installer provided on the NodeJS website.
    * With Node installed, run `[sudo] npm install -g gulp bower`.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can also try [Git for Windows](http://git-for-windows.github.io/).

## Installing

The Miracle CLI is installed through npm.

```bash
npm install -g miralce-cli
```

This will add the `miracle` command to your system.

### Updating

The CLI periodically gets updates that add features or fix bugs. Use npm to upgrade the CLI to the newest version.

```bash
npm update -g miracle-cli
```

To check what version you currently have, use `-v`.

```bash
miracle -v
```

## Commands

### New

Starts the setup process for a new Miracle project. The CLI will ask you a folder name for the project.

```bash
miracle new
```

### Watch

While inside of your app's folder, use the `watch` command to assemble your app and run a test server.

```bash
cd appName
miracle watch
```

While this process is running, you can view the assembled app in your browser, at this URL:

```
http://localhost:8080
```

While the server is running, any changes you make to your HTML, Sass, or JavaScript will automatically be processed and added to your live app.

### Build

To build your app for production, use `foundation build`.

```bash
miracle build
```

### Help

Lists all available commands in the CLI.

```bash
miracle help
```

Add a command name at the end to learn how a specific command works.

```bash
miracle help new
```
