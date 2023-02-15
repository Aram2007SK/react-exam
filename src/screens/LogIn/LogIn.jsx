import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import Inputs from '../../components/Inputs/Inputs'
import { signIn } from '../../redux/actions/logInActions'
import { authErrorSelector } from '../../redux/selectors/authSelector'

export default function LogIn() {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPass] = useState('')
  const [loginError, setLoginError] = useState('')
  const [PasswordError, setPasswordError] = useState('')
  const error = useSelector(authErrorSelector)
  // localStorage.setItem('membersList',JSON.stringify([{login:'Admin',password:'123456789'}])) 
  // localStorage.clear()
  const trimLogin = login.trim()
  const trimPassword = password.trim()
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const changeLogin = useCallback((e) => {
    setLogin(e.target.value)
  }, [login])
  const changePassword = useCallback((e) => {
    setPass(e.target.value)
  }, [password])
  // const toggleModal = useCallback(() => {
  //   setIsModalOpen(!isModalOpen)
  // }, [isModalOpen])
  const handleSubmit = useCallback(() => {
    if (trimLogin.length < 2)
      setLoginError('login error')
    if (trimPassword.length < 8)
      setPasswordError('Password error')
    if (trimLogin.length > 2 && trimPassword.length > 8)
      dispatch(signIn({login:trimLogin,password: trimPassword}))
  }, [trimLogin, trimPassword])
  // console.log('memberList', memberList);
  return (
    <div className='LogIn'>
      <h1>Log-In</h1>
      <div>
        <Inputs className='input' value={login} error={loginError} handleChange={changeLogin} placeholder={'Please enter a log-in'} />
        <Inputs className='input' value={password} error={PasswordError} handleChange={changePassword} placeholder={'Please enter a password'} />
        <button className='sub' onClick={handleSubmit}>Submit</button>
        {error&&<div className='error'>{error}</div>}
        {/* <div onClick={toggleModal} >Open Modal</div>
        {isModalOpen ? <div className='modal'><div onClick={() => setIsModalOpen(false)}>X</div></div> : null} */}
      </div>
    </div>
  )
}
