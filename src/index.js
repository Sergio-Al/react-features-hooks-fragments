import React, { useState } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

const App = (props) => {
  // const [count, setCount] = useState(props.defaultCount);
  // const [text, setText] = useState("");
  const [state, setState] = useState({ count: props.count, text: "" });

  return (
    <div>
      <p>
        The current {state.text || "count"} is {state.count}
      </p>
      <button
        onClick={() =>
          setState(
            {
              //...state,
              count: state.count - 1,
            } /* not recomended use ...state*/
          )
        }
      >
        -1
      </button>
      <button onClick={() => setState({ count: props.defaultCount })}>
        Reset
      </button>
      <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
      <input
        value={state.text}
        onChange={(e) => setState({ text: e.target.value })}
      />
    </div>
  );
};

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

// const App = (props) => {
//   const [count, setCount] = useState(props.defaultCount);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <p>
//         The current {text || "count"} is {count}
//       </p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(props.defaultCount)}>Reset</button>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
