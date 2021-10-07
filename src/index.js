import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title,
        body,
      },
    ]);
    setTitle("");
    setBody("");
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  useEffect(() => {
    const initialNotes = JSON.parse(localStorage.getItem("notes"));
    if (initialNotes) {
      setNotes(initialNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </div>
  );
};

const App = (props) => {
  const [count, setCount] = useState(props.defaultCount);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("this should only run once");
  }, []); // only runs once

  useEffect(() => {
    console.log("useEffect ran");
    document.title = count;
  }, [count]); // only runs if count is updated

  return (
    <div>
      <p>
        The current {text || "count"} is {count}
      </p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.defaultCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    {/* <App defaultCount={2} /> */}
    <NoteApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
