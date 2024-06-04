import {createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'createNotes',
  initialState: {items: []},
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const indexOfNote = action.payload.noteIndex;
      const newData = action.payload.newNoteData;
      state.items[indexOfNote] = newData;
    },
  },
});

export const {addNote, deleteNote, updateNote} = notesSlice.actions;
export default notesSlice.reducer;
