// Notes App: add and remove notes stored in a .json file
// getting and parsing input from user
const chalk = require("chalk");
const { command, describe } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

// test your work using node app.js remove --title="some title"

// Customize yargs version
yargs.version("17.3.1");

// console.log(process.argv);
// console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
//  handler: function(argv) {
  handler(argv) { // refactored ESS6  
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  // setup the remove command to take a required "--title" option
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  // Call removeNote in remove command handler
//  handler: function(argv) {
  handler(argv) { // refactored ESS6  
    notes.removeNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all the notes.",
//  handler: function() {
  handler() { // refactored ESS6
    notes.listNotes();
  }
});

yargs.command({
  command: "add",
  describe: "List all the notes.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
//  handler: function(argv) {
  handler(argv) { // refactored ESS6  
    notes.addNote(argv.title, argv.body);
  }
});

// Create list command
yargs.command({
  command: "read",
  describe: "Read a note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {   // refactored
    notes.readNote(argv.title);
  }
});

// console.log(yargs.argv);
yargs.parse();
