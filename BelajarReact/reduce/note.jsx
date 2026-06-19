import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  if (isEditing) {
    component = (
      <div>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button
          onClick={() => {
            setIsEditing(false); // ✅ Sudah benar
          }}
        >
          save
        </button>
      </div>
    );
  } else {
    component = (
      <div>
        {note.text}
        <button
          onClick={() => {
            // ✅ onChange → onClick
            setIsEditing(true); // ✅ isEditing → setIsEditing
          }}
        >
          edit
        </button>
      </div>
    );
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button
        onClick={() => {
          onDelete(note);
        }}
      >
        delete
      </button>
    </label>
  );
}
