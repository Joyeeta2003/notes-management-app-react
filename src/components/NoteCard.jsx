import React from 'react';
import { X } from 'lucide-react';

const NoteCard = ({
    note,
    idx,
    deleteNote,
    setTitle,
    setDetails,
    setEditIndex,
}) => {
    const colors = [
        'bg-yellow-100',
        'bg-pink-100',
        'bg-green-100',
        'bg-blue-100',
        'bg-purple-100',
    ];

    return (
        <div
            className={`min-h-[220px] w-full sm:w-60 p-5 rounded-2xl shadow-lg relative flex flex-col ${colors[idx % colors.length]
                }`}
        >
            <button
                onClick={() => deleteNote(idx)}
                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1"
            >
                <X size={16} />
            </button>

            <h3 className="text-xl font-bold text-gray-800 break-words">
                {note.title}
            </h3>

            <p className="mt-3 text-gray-600 break-words">
                {note.details}
            </p>

            <div className="mt-auto flex justify-between items-center pt-4">
                <p className="text-xs text-gray-500">
                    {note.createdAt}
                </p>

                <button
                    onClick={() => {
                        setTitle(note.title);
                        setDetails(note.details);
                        setEditIndex(idx);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default NoteCard;