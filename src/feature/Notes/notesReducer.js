import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const noteId="65d7d31d817b0eb77efc3a2e";
// axios.get(`${import.meta.env.VITE_SERVER}/notes/loadNotes`)


const notesSlice = createSlice({
    name: 'notes',
    initialState: {
      loading: false,
      notes: [],
      error: null,
    },
    reducers: {
      // To load notes
      loadNotesStart: (state) => {
        state.loading = true;
      },
      loadNotesSuccess: (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      },
      loadNotesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      // To change notes
      updateNote: (state, action) => {
        const updatedNote = action.payload;
        state.notes = state.notes.map(note =>
          note._id === updatedNote._id ? updatedNote : note
        );
        console.log("note updated in store");
      },
      addNote:(state,action)=>{
         const newNote = action.payload;
         state.notes.push(newNote);
         console.log("Note added");
      },
      deleteNote: (state, action) => {
        const noteIdToDelete = action.payload;
        state.notes = state.notes.filter(note => note._id !== noteIdToDelete);
      },
      changeNoteStatePending: (state) => {
        state.loading = true;
      },
      changeNoteStateSuccess: (state) => {
        state.loading = false;
      },
      changeNoteStateFailure: (state) => {
        state.loading = false;
        // Handle error if needed
      },
    },
  });

  export const { loadNotesStart, loadNotesSuccess, loadNotesFailure,
    updateNote,addNote,deleteNote, changeNoteStatePending, changeNoteStateSuccess, changeNoteStateFailure } = notesSlice.actions;
  
  export default notesSlice.reducer;