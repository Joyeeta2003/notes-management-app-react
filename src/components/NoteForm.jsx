import React from 'react';

const NoteForm = ({
  darkMode,
  title,
  setTitle,
  details,
  setDetails,
  submitHandeler,
  editIndex,
}) => {
  return (
    <form
      onSubmit={submitHandeler}
      className="flex flex-col gap-3 lg:w-1/2"
    >
      <h2 className="text-2xl font-bold">Add Notes</h2>

      <input
        type="text"
        placeholder="Enter Notes Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`
    border rounded-md p-3
    ${darkMode
            ? 'bg-gray-800 text-white placeholder-gray-400'
            : 'bg-white text-black placeholder-gray-500'}
  `}

      />

      <textarea
        placeholder="Write Details Here"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className={`
    border rounded-md p-3 h-28
    ${darkMode
            ? 'bg-gray-800 text-white placeholder-gray-400'
            : 'bg-white text-black placeholder-gray-500'}
  `}
      />

      <button
        className={`rounded-md p-3 font-bold active:scale-95 border
          
      ${darkMode
          ? 'bg-gray-900 text-white border-white'
          : 'bg-white text-black border-gray-900'}
        `}>
        {editIndex !== null ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;