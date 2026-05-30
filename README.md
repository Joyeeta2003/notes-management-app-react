# Notes Management App

A simple React note management app built with Vite and Tailwind CSS. Users can add, edit, delete, and search notes, and note data is stored in the browser's local storage.

## Features

- Create new notes with title and details
- Edit existing notes
- Delete notes
- Search notes by title
- Persist notes in `localStorage`
- Light/Dark mode toggle

## Components and their responsibilities

- `src/App.jsx`
  - Manages application state and theme mode
  - Loads and saves notes from/to `localStorage`
  - Handles add, edit, delete, and search functionality
  - Renders the note form, search bar, and note cards

- `src/components/NoteForm.jsx`
  - Displays the note input form
  - Accepts title and details
  - Submits new or updated notes

- `src/components/NoteCard.jsx`
  - Displays each note as a card
  - Shows note title, details, and creation time
  - Provides Edit and Delete buttons for each note

- `src/components/SearchBar.jsx`
  - Provides a search input field
  - Filters notes in real time by title

## Getting started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- Notes are kept in the browser's `localStorage`
- Search only filters note titles
- Editing a note fills the form with the selected note contents
