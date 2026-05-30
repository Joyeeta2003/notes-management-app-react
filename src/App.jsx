import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [search, setSearch] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(task));
  }, [task]);

  const submitHandeler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      alert('Please fill all fields');
      return;
    }

    if (editIndex !== null) {
      const updated = [...task];

      updated[editIndex].title = title;
      updated[editIndex].details = details;

      setTask(updated);
      setEditIndex(null);
    } else {
      setTask([
        ...task,
        {
          title,
          details,
          createdAt: new Date().toLocaleString(),
        },
      ]);
    }

    setTitle('');
    setDetails('');
  };

  const deleteNote = (idx) => {
    const copy = [...task];
    copy.splice(idx, 1);
    setTask(copy);
  };

  const filteredTasks = task.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen p-5 ${
        darkMode
          ? 'bg-gray-900 text-white border-white'
          : 'bg-white text-black border-gray-900'
      }`}
    >
     <div className="flex justify-end mb-2">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className=" px-2 py-2"
  >
{darkMode ? "🌙" : "☀️"}
  </button>
</div>

      <div className="lg:flex gap-10">
        <NoteForm
          title={title}
          setTitle={setTitle}
          details={details}
          setDetails={setDetails}
          submitHandeler={submitHandeler}
          editIndex={editIndex}
        />

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-2">
            Recent Notes
          </h2>

          <p className="mb-3">
            Total Notes: {task.length}
          </p>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <div className="flex flex-wrap gap-5">
            {filteredTasks.length === 0 ? (
              <h3>No Notes Available</h3>
            ) : (
              filteredTasks.map((note, idx) => (
                <NoteCard
                  key={idx}
                  note={note}
                  idx={idx}
                  deleteNote={deleteNote}
                  setTitle={setTitle}
                  setDetails={setDetails}
                  setEditIndex={setEditIndex}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;