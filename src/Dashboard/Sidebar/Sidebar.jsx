import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { BiStar,BiArchiveIn, BiSolidTrash, BiNote } from "react-icons/bi";


export const Sidebar = () => {


  return (
    <>
      <div className="Sidebar">
        <NavLink to='/dashboard'>
          <div className='sidebar-element'>
            <BiNote/>
              Notes
          </div>
        </NavLink>
        <NavLink to='/dashboard/starred'>
          <div className='sidebar-element'>
            <BiStar />
            Starred
          </div>
        </NavLink>
        <NavLink to='/dashboard/archived'>
          <div className='sidebar-element'>
            <BiArchiveIn/>
            Archived
          </div>
        </NavLink>
        <NavLink to='/dashboard/trash'>
          <div className='sidebar-element'>
            <BiSolidTrash/>
            Trash
          </div>
        </NavLink>


        {/* <ul>
          <li className={`sidebar-element ${activeItem === 'notes' ? 'active' : ''}`}
              onClick={() => handleItemClick('notes')}>
                <Link to="/">Notes</Link>
          </li>
          <li className={`sidebar-element ${activeItem === 'notes' ? 'active' : ''}`}
              onClick={() => handleItemClick('notes')}>
                <Link to="/starred">Starred</Link>
          </li>
          <li className={`sidebar-element ${activeItem === 'notes' ? 'active' : ''}`}
              onClick={() => handleItemClick('notes')}>
                <Link to="/archived">Archived</Link>
          </li>
          <li className={`sidebar-element ${activeItem === 'notes' ? 'active' : ''}`}
              onClick={() => handleItemClick('notes')}>
                <Link to="/bin">Bin</Link>
          </li>
          
        </ul> */}
      </div>
    </>
  )
}
