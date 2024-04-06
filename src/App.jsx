
import './App.css'
import { Dashboard } from './Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Archived } from './Dashboard/Archived/Archived';
import { NotesSection } from './Dashboard/NotesSection/NotesSection';
import { Trash } from './Dashboard/Trash/Trash';
import { Starred } from './Dashboard/Starred/Starred';

import { Home } from './Home/Home.jsx';
import { Login } from './Login/Login.jsx';
import { SignUp } from './SignUp/SignUp.jsx';

function App() {

  return (
    <>
      <div className="mainContainer">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} >
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/login' element={<Login />} />
            </Route>
            <Route exact path='/dashboard' element={<Dashboard />} >
              <Route exact path='/dashboard' element={<NotesSection />} />
              <Route exact path='/dashboard/archived' element={<Archived />} />
              <Route exact path='/dashboard/starred' element={<Starred />} />
              <Route exact path='/dashboard/trash' element={<Trash />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
