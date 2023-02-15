import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import { Member } from '../../components/member/Member'
import { membersListSelector } from '../../redux/selectors/authSelector'
  
export default function MainPage() {
  const membersList = useSelector(membersListSelector)
  console.log('membersList- ',membersList);
  return (
    <div>
      <Header/> 
      <Member/>
    </div>
  )
}
