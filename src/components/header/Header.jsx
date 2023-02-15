import React, { useCallback, useState } from 'react';
import './style.css';
import img from '../image/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/actions/logInActions';
import { currentUserSelector } from '../../redux/selectors/authSelector';


export default function Header() {
    const dispatch = useDispatch()
    const currentUser = useSelector(currentUserSelector)
    console.log(currentUser.login[0]);
    const value = currentUser.login[0]
    const handleLogOut = useCallback(() => {
        dispatch(logOut())
    }, [])
    return (
        <div className="wrapper">
            <div className='header'>
                <div className="container">
                    <div className="top-header">
                        <div>
                            <img src={img} alt="" className='logo' />
                        </div>
                        <div className='user'>
                            <div className='user-logo'>{value}</div>
                            <div onClick={handleLogOut} className='log-out'>Log out</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

{/* <a href="#">Overview</a>
<a href="#">Messages</a>
<a href="#">Calendar</a> */}