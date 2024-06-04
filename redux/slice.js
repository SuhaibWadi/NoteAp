import {createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'createNotes',
  initialState: {items: []},
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      console.log('555', state.items);
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      console.log('this is the payload', action.payload);
      // console.log(state.items[0].id);
      console.log(state.items);
      let idk = state.items[0].text;
      const updatingNote = state.items.find(note => note.id === action.payload);
      if (updatingNote) {
        updatingNote.content = idk;
        console.log('text content', idk);
      }
    },
    idk: (state, action) => {
      state.items.length = 0;
      state.items.push.apply(state.items, action.payload);
    },
  },
});

export const {addNote, deleteNote, updateNote, idk} = notesSlice.actions;
export default notesSlice.reducer;
