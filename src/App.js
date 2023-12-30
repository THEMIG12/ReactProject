import React, { useState } from 'react';
import './App.css';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      text: '',
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };


  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <button className='AddButton' onClick={addNote}>+</button>
    </div>
  );
}

export default App;