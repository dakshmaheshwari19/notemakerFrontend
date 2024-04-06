import { useDispatch, useSelector } from 'react-redux';
import './EditNote.css'
import React, { useState } from 'react';
import { addNewNote } from '../../app/actions/notesActions';

export const EditNote = (props) => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const dispatch = useDispatch()
const loading = useSelector(state => state.notes.loading);
const {user}=useSelector((state)=>state.user)

// const userId="65d76a5909e7d283c32a677f"

const handleSubmit = async(e) => {
    e.preventDefault();
    // Create a new object with the title and description
    // Push the new item into the items array
    if(title || description){
      await dispatch(addNewNote(title,description));
      // console.log("message received :",message);
      setTitle('');
      setDescription('');
      props.setTakeNote(false);
    }

  };

  return (
    <>
        <form aria-disabled={loading} onSubmit={handleSubmit} >
        <label>
          <input
            id='title'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
        </label>
        <br />
        <label>
          <input
          id='desc'
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Take a note...'
            autoFocus

          />
        </label>
        <br />
        <button type="submit" disabled={loading}  >Submit</button>
      </form>
    
    </>
  )
}
