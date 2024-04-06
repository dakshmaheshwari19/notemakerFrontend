import React, { useEffect, useRef, useState } from 'react'
import './NotesSection.css'
import { Note } from '../Note/Note'
import { EditNote } from '../EditNote/EditNote';
import { datasetNotes } from '../../Services/dataset.jsx';
import { DisplayNotes } from '../DisplayNotes.jsx';


export const NotesSection = () => {
  // const [noteflag, setnoteflag] = useState(false);
  const [takeNote, setTakeNote] = useState(false);
  const containerRef = useRef(null);
  const [dataset,setDataset]=useState(datasetNotes());




//   useEffect(()=>{
//     console.log("calld loadnotes");
//      dispatch(loadNotes(userId))
//      if(!noteflag) setnoteflag(true)
//      setNotes(notes)
// },[])

  useEffect(() => {
   function handleClickOutside(event) {
      
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // Clicked outside the container
        setTakeNote(false); // Change the state of takeNote to false
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const addToList = async(title, description) => {
    
    let sno;
    if (dataset.length === 0) {
      sno = 0;
    }
    else {
      sno = dataset[dataset.length - 1].sno + 1;
    }
    const note = {
      sno: sno,
      title: title,
      description: description,
      starred:false,
      archived:false,
      trashed:false
    }
    setDataset([...dataset,note]);
  }


  return (
    <>
      <div className="NotesSection">
        <div className="takeNoteSection">
        {takeNote ?
          <div className="addNote"
            ref={containerRef}>
            <EditNote setTakeNote={setTakeNote} addToList={addToList} />
          </div>
          :
          <div id="takeNoteText"  onClick={() => setTakeNote(true)}>
              Take a note...
          </div>}
        </div>
        <div className="renderNotes">
          <DisplayNotes/>
          {/* {
            dataset.slice().reverse().filter(note=> (!note.trashed) && (!note.archived)).map((note) => {
              return (<Note note={note} key={note.sno} />)
            })
          } */}
          
        </div>
      </div>

    </>
  )
}
