import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import { useState } from "react";
import Count from "./components/Count";
import NoNotes from "./components/NoNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  };
  const handleDelete = (id) => {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  };

  return (
    <div className="app">
      <Header />
      <Count count={notes.length} />
      <CreateArea onAdd={addNote} />
      {notes.length === 0 ? (
        <NoNotes />
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default App;
