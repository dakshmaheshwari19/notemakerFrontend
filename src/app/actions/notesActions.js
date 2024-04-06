import { loadNotesStart, loadNotesSuccess, loadNotesFailure, updateNote, changeNoteStatePending, changeNoteStateSuccess, changeNoteStateFailure, deleteNote, addNote } from '../../feature/Notes/notesReducer.js';
// const userId = "65d76a5909e7d283c32a677f";
import axios from 'axios';

export const loadNotes = () => async (dispatch) => {
  try { 
    dispatch(loadNotesStart());

    // Replace this with your actual backend endpoint
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/notes/loadNotes`,{}, {withCredentials:true});
    const notesData = await response.data.arrayOfNotes;

    dispatch(loadNotesSuccess(notesData));
  } catch (error) {
    dispatch(loadNotesFailure(error.message));
  }
};

// const noteId = "65de033d7fed0a3ab69a481a";


export const changeNoteState = (noteId, starred, archived, trashed) => async (dispatch) => {
  try {
    dispatch(changeNoteStatePending()); // Dispatch action to indicate pending state

    // dispatch({ type: 'CHANGE_NOTE_STATE_PENDING' }); // Dispatch action to indicate pending state
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/notes/changeState`,
      {
        noteId: noteId,
        starred: starred,
        archived: archived,
        trashed: trashed
      });
    await dispatch(updateNote(response.data.updatedNote));
    dispatch(changeNoteStateSuccess()); 
    // Dispatch action to indicate success
    // dispatch({ type: 'CHANGE_NOTE_STATE_SUCCESS' }); // Dispatch action to indicate success
    return response.data; // Return response data
  } catch (error) {
    console.error('Error changing note state:', error);
    dispatch(changeNoteStateFailure()); 
    // Dispatch action to indicate failure
    // dispatch({ type: 'CHANGE_NOTE_STATE_FAILURE' }); // Dispatch action to indicate failure
    throw error; // Throw error for component to handle
  }
};

export const deleteNoteById = (noteId) => async (dispatch) => {
  try {
    dispatch(changeNoteStatePending()); // Dispatch action to indicate pending state
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/notes/deleteNote`,
    {
      noteId: noteId,
    });
    await dispatch(deleteNote(noteId));
    dispatch(changeNoteStateSuccess()); 
    return response.data.message; // Return response data
  } catch (error) {
    console.error('Error deleting from db:', error);
    dispatch(changeNoteStateFailure()); 
    throw error; 
  }
};

export const addNewNote = (title,description) => async (dispatch) => {
  try {
    dispatch(changeNoteStatePending()); // Dispatch action to indicate pending state
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/notes/addNote`,
    {
      title:title,
      description:description
    },{withCredentials:true});
    await dispatch(addNote(response.data.newNote));
    dispatch(changeNoteStateSuccess()); 
    return response.data.message; // Return response data
  } catch (error) {
    console.error('Error adding to db:', error);
    dispatch(changeNoteStateFailure()); 
    throw error; 
  }
};
export const editNote = (noteId,title,description) => async (dispatch) => {
  try {
    dispatch(changeNoteStatePending()); // Dispatch action to indicate pending state
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/notes/editNote`,
    {
      noteId: noteId,
      title:title,
      description:description
    });
    await dispatch(updateNote(response.data.updatedNote));
    dispatch(changeNoteStateSuccess()); 
    return response.data.message; // Return response data
  } catch (error) {
    console.error('Error editing note:', error);
    dispatch(changeNoteStateFailure()); 
    throw error; 
  }
};