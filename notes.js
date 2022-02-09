const fs = require("fs");
const chalk = require("chalk");

// const addNote = function(title, body) {
const addNote = (title, body) => { // Must be exported. See end of file. refactored.
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title)// refactored
  
  if (!duplicateNote) {
    notes.push({
      title:title,
      body: body
    })
    // console.log(notes);
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  }
  else {
    console.log(chalk.red.inverse("Note title already existing!"))
  }

}

const removeNote = (title) => { // Must be exported. See end of file. refactored
  const notes = loadNotes(); // load existing nodes
  const notesToKeep = notes.filter((note) => note.title != title)
 
  if (notes.length > notesToKeep.length){
     console.log(chalk.green.inverse("Note removed!"));
     saveNotes(notesToKeep);
  }
  else {
    console.log(chalk.red.inverse("No note found"));
  }
}

const listNotes = () => { //Must be exported. See end of file.
  const notes = loadNotes()
  console.log(chalk.inverse("Your notes"))
  notes.forEach((note) => {
    console.log(note.title)
  });
}

const readNote = (title) => { // Must be exported. See end of file.
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }
  else {
    console.log(chalk.red.inverse("Note not found!"))
  }
}

const saveNotes =  (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = (notes) => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
 
  } catch(e) {
    return[]
  }
}

// all functions above must be exported except saveNotes and loadNotes, which are not required by other files
module.exports = {
	addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};