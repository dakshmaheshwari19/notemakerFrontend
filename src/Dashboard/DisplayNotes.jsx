import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadNotes } from '../app/actions/notesActions.js';
import { useEffect } from 'react';
import { Note } from './Note/Note';

export const DisplayNotes = () => {
    const dispatch=useDispatch()
    const { loading, notes, error } = useSelector((state) => state.notes);
    const {user}=useSelector((state)=>state.user)
  
    useEffect(() => {
      // dispatch(loadNotes(user._id));
      dispatch(loadNotes());
      console.log(user.username);
    }, [dispatch]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  return (
    <>
    {
            notes.slice().reverse().filter(note=> (!note.trashed) && (!note.archived)).map((note) => {
              return (<Note note={note} key={note._id} />)
            })
          }
    </>
  )
}
