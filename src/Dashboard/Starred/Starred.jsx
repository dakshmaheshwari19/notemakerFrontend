import React, { useState } from 'react'
import { Note } from '../Note/Note';
import { datasetNotes } from '../../Services/dataset';
import {  useSelector } from 'react-redux';

export const Starred = () => {
  const { loading, notes, error } = useSelector((state) => state.notes);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
    <div className="NotesSection">
      <div className="noteSectionHeading">
      <h1>Starred Notes</h1>
      <hr />
      </div>
      <div className="renderNotes">
        {notes.slice().reverse().filter(note => note.starred && !note.archived && !note.trashed).map((note)=>{
       return (<Note note={note} key={note._id} />)
        })}
      </div>
    </div>
    </>
  )
}
