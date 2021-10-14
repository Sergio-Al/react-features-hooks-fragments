import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
  const { notes } = useContext(NotesContext); // key of context, we use only what we need

  return notes.map((note) => (
    <Note key={note.title} note={note} />
  ));
};

export default NoteList;
