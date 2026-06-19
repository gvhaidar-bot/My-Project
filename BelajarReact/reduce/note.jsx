import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let component;

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <div>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>save</button>
      </div>
    );
  } else {
    component = (
      <div>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone} // ✅ PERBAIKAN
      />
      {component}
      <button onClick={() => onDelete(note)}>delete</button>
    </label>
  );
}
