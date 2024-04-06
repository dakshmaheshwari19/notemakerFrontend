import React from 'react'
import './addNote.css'
export const addNote = () => {
  return (
    <>
    <form onSubmit={handleSubmit}>
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
            placeholder='Description'

          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
