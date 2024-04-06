import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './ViewNote.css';
import { editNote } from '../../../app/actions/notesActions';

const ViewNote = ({ note, onClose }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleSubmit(editedTitle,editedDescription); // Call handleSubmit if clicked outside the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef,editedTitle,editedDescription]);

  const handleSubmit = async(title,description) => {
    const noteId=note._id;
    await dispatch(editNote(noteId,title,description));
    onClose(); // Close the modal after saving the note
  };

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder='Title' 
        />
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          placeholder='Take a note...'
        />
      </div>
    </div>
  );
};

export default ViewNote;
