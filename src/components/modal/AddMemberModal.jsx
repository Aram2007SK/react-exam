import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMembers } from '../../redux/actions/memberAction'
import { authErrorSelector } from '../../redux/selectors/authSelector'
import { membersListSelector } from '../../redux/selectors/membrsSelector'
import Inputs from '../Inputs/Inputs'
import './style.css'

export default function AddMemberModal() {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loginError,setLoginError]=useState('')
  const [passwordError,setPasswordError]=useState('')
  const error = useSelector(authErrorSelector)
  const memberList = useSelector(membersListSelector)
  const trimLogin = login.trim()
  const trimPassword = password.trim()
  const changeLogin = useCallback((e) => {
    setLogin(e.target.value)
  }, [login])
  const changePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [password])
  const handleSubmit = useCallback(() => {
    if (trimLogin.length < 2)
      setLoginError('login error')
    if (trimPassword.length < 8)
      setPasswordError('Password error')
    if (trimLogin.length > 2 && trimPassword.length > 8)
      dispatch(addMembers({login:trimLogin,password:trimPassword}))
  }, [trimLogin, trimPassword])
  return (
    <div>
      <div className="modal">
        <h1>Add Member</h1>
        <div className="inputs">
          <Inputs className='input' error={loginError} type={'text'} placeholder={'Please type a login'} handleChange={changeLogin} />
          <Inputs className='input' error={passwordError} type={'password'} placeholder={'Please type a password'} handleChange={changePassword} />
          <div className="submit" onClick={handleSubmit}>Submit</div>
          {error&&<div className='error'>{error}</div>}
        </div>
      </div>
    </div>
  )
}
