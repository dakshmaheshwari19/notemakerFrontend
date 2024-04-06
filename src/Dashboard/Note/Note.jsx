import React, { useState, useRef, useEffect } from 'react'
import { BiEdit, BiArchiveIn, BiStar, BiSolidStar, BiSolidArchiveIn, BiLogOutCircle, BiSolidTrashAlt } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import './Note.css'
import { changeNoteStateFailure, changeNoteStatePending, changeNoteStateSuccess, updateNote } from '../../feature/Notes/notesReducer';
import { changeNoteState, deleteNoteById } from '../../app/actions/notesActions';
import { useDispatch, useSelector } from 'react-redux';
import ViewNote from './ViewNote/ViewNote';
export const Note = (props) => {
  const [isStarred, setIsStarred] = useState(props.note.starred);
  const [isArchived, setIsArchived] = useState(props.note.archived);
  const [isTrashed, setIsTrashed] = useState(props.note.trashed)

  const dispatch = useDispatch();
  const loading = useSelector(state => state.notes.loading);

  const handleStateChange = async (parameter) => {
    const { _id: noteId, starred , archived, trashed } = props.note;
    try {
           if(parameter=="starred"){
            await dispatch(changeNoteState(noteId, !starred, archived, trashed));
           }
           if(parameter=="archived"){
            await dispatch(changeNoteState(noteId, starred, !archived, trashed));
           }
           if(parameter=="trashed"){
            await dispatch(changeNoteState(noteId, starred, archived, !trashed));
           }
    } catch (error) {
      console.error('Error changing note state:', error);
      // Handle error if needed
    }
  };

  const handleDeleteNote = async () => {
    try {
      const noteId=props.note._id;
      const res = await dispatch(deleteNoteById(noteId));
      console.log(res);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <>

      <div className="NoteMain" onClick={handleModalOpen} >
      {showModal && <ViewNote note={props.note} onClose={handleModalClose} />}
        <h4>{props.note.title}</h4>
        <p>{props.note.description}</p>
        {!isTrashed?<div className="deleteButton" onClick={() => {  handleStateChange("trashed") }}>
          {/* <CgClose /> */}
          <AiFillCloseCircle/>
        </div>: ""}
        {!isTrashed ?
        
          <div className="NoteMenu">
            <div className="mycon">
              <BiEdit />
            </div>
            <div className="mycon" onClick={() => {  handleStateChange("archived") }} disabled={loading}>
              {isArchived ?
                <BiSolidArchiveIn /> :
                <BiArchiveIn />}
            </div>
            <div className="mycon" onClick={() => { handleStateChange("starred") }} disabled={loading}>
              {isStarred ? <BiSolidStar /> : <BiStar />}
            </div>
          </div>
          :
          <div className="NoteMenu">
            <div className="mycon" onClick={() => {  handleStateChange("trashed") }}>
              <BiLogOutCircle />
            </div>
            <div className="mycon" onClick={()=>{handleDeleteNote()}}>
              <BiSolidTrashAlt  />
            </div>
          </div>
        }
        {/* {openViewModal && <div className="viewNoteModal" >
          <ViewNote note={props.note} closeVM={closeviewmodal} />
        </div>} */}
      </div>

    </>
  )
}
