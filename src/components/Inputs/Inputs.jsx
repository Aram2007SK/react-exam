import React from 'react'
import './style.css'

export default function Inputs({handleChange,value,placeholder,className,error}) {
  return (
    <div className='inputs'>
      <input type="text" className={className} value={value} onChange={handleChange} placeholder={placeholder}/>
      {error?<div className='error'>{error}</div>:null}
    </div>
  )
}
