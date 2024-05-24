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
      navigate("/login") ;

      // console.log("message received :",message);
    }
    else {
      setShowFieldsEmpty(true)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input
          id='email'
          type="email"
          value={formData.email}
          name="email"
          // onChange={(e) => setTitle(e.target.value)}
          placeholder='Ex- harish234@gmail.com'
          onChange={onChange}
        />

        <br />
        <label htmlFor="username">Username</label>
        <input
          id='username'
          type="text"
          value={formData.username}
          name="username"
          // onChange={(e) => setDescription(e.target.value)}
          placeholder='Ex- Harish420'
          onChange={onChange}
        // autoFocus

        />

        <br />
        <label htmlFor="fullname">Fullname</label>
        <input
          id='fullname'
          type="text"
          value={formData.fullname}
          name="fullname"
          // onChange={(e) => setDescription(e.target.value)}
          placeholder='Ex- Harish Chandra'
          onChange={onChange}
        // autoFocus

        />

        <br />
        <label htmlFor="avatar">Avatar</label>
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
        <label htmlFor="password">Password</label>
        <input
          id='password'
          type="password"
          value={formData.password}
          name="password"
          // onChange={(e) => setDescription(e.target.value)}
          placeholder='#$Ab@9olsW%'
          onChange={onChange}
        // autoFocus

        />

        <br />
        {showFieldsEmpty && <div className='appWarning'>*All fields are compulsary</div> }
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
