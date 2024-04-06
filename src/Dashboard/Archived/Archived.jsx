import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Archived.css'
import { Note } from '../Note/Note'
import {datasetNotes} from '../../Services/dataset'
export const Archived = () => {

  // only listing the notes not updating
  // later will add the loadnotes while adding the CRUD operations
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
      <h1>Archived Notes</h1>
      <hr />
      </div>
      <div className="renderNotes">
      {
            notes.slice().reverse().filter(note=> (!note.trashed) && (note.archived)).map((note) => {
              return (<Note note={note} key={note._id} />)
            })
          }
      </div>
    </div>
    </>
  )
}
