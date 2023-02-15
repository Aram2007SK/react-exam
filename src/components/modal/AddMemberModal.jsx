import React, { useCallback } from 'react'

export default function AddMemberModal() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const changeLogin = useCallback((e) => {
    setLogin(e.target.value)
  }, [login])
  const changePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [password])
  return (
    <div>
      <div className="modal">
        <Inputs className='input' handleChange={changeLogin} />
        <Inputs className='input' handleChange={changePassword} />
      </div>
    </div>
  )
}
