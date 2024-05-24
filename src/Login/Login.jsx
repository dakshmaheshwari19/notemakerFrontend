import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../app/actions/userActions';
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading,user,error} = useSelector((state) => state.user);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showFieldsEmpty, setShowFieldsEmpty] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("dispatching");
      const resp = await dispatch(loginUser(email, password));
      console.log("resp:", resp);
      console.log("dispatching completed");
      navigate("/dashboard") ;
      console.log("current user :",user);
    }
    else {
      setShowFieldsEmpty(true)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="email">Email</label>
        <input
          id='email'
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          autoFocus

        />

        <br />

        <label htmlFor="password">Password</label>
        <input
          id='password'
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='#$Ab@9olsW%'
        // autoFocus

        />

        <br />
        {showFieldsEmpty && <div className="appWarning">*Email or password missing.</div> }
        <br />
        <div className="appWarning">
          *For testing purpose use email- test@test.com and password- testtest
        </div>
        <br />
        <button type="submit" >
          {loading? <>Verifying</>:<>Login</> }
          </button>
      </form>

    </>
  )
}
