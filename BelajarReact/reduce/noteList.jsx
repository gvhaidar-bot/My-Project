import Note from "./note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
