import { Login } from '../Login/Login'
import './SignUp.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import { createUser } from '../app/actions/userActions';


export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const loading = useSelector(state => state.user.loading);
  // const [avatarImage,setAvatarImage]=useState()

  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    avatar:''
  });
  const [showFieldsEmpty, setShowFieldsEmpty] = useState(false)

  const { username, fullname, email, password, avatar } = formData;

  const onChange = e =>{
  if (e.target.name === 'avatar') {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
}

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("log fromdata: ",formData);
    console.log("avatarImage : ",avatar);
    if (email && username && password && fullname && avatar) {
      console.log("dispatching");
      const resp=await dispatch(createUser(formData));
      console.log("resp:",resp);
      console.log("dispatching completed");
      navigate("/home/login") ;

      // console.log("message received :",message);
    }
    else {
      setShowFieldsEmpty(true)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input
          id='email'
          type="email"
          value={formData.email}
          name="email"
          // onChange={(e) => setTitle(e.target.value)}
          placeholder='email'
          onChange={onChange}
        />

        <br />

        <input
          id='username'
          type="text"
          value={formData.username}
          name="username"
          // onChange={(e) => setDescription(e.target.value)}
          placeholder='username'
          onChange={onChange}
        // autoFocus

        />

        <br />
        <input
          id='fullname'
          type="text"
          value={formData.fullname}
          name="fullname"
          // onChange={(e) => setDescription(e.target.value)}
          placeholder='fullname'
          onChange={onChange}
        // autoFocus

        />

        <br />
        <input
          id='avatar'
          type="file"
          // value={formData.avatar}
          name="avatar"
          // onChange={(e) => setAvatarImage(e.target.files[0])}
          placeholder='Upload Your avatar'
          onChange={onChange}
        // autoFocus

        />

        <br />
        <input
          id='password'
          type="password"
          value={formData.password}
          name="password"
          // onChange={(e) => setDescription(e.target.value)}
          placeholder='password'
          onChange={onChange}
        // autoFocus

        />

        <br />
        {showFieldsEmpty && "All fields are compulsary"}
        <br />
        <button >
        {loading? 
        <>This may take few seconds...</>
      :
      <>Sign In</>
      }
        </button>
      </form>
    </>
  )
}
