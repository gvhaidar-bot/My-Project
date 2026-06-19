import NoteForm from "./noteForm";
import NoteList from "./noteList";
import { useReducer } from "react";

let id = 0;
const initialNotes = [
  { id: id++, text: "learn html", done: false },
  { id: id++, text: "learn css", done: true },
  { id: id++, text: "learn javascript", done: true },
  { id: id++, text: "learn reactJS", done: true },
];

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...notes,
        {
          id: id++,
          text: action.text,
          done: false,
        },
      ];
    case "CHANGE_NOTE":
      return notes.map((note) => (note.id === action.id ? { ...note, text: action.text, done: action.done } : note));
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id); // ✅ PERBAIKAN
    default:
      return notes;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
    </div>
  );
}
