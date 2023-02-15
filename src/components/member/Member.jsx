import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import Inputs from "../Inputs/Inputs";
import './style.css'

export const Member = function () {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="membersList">
            <div className="member">Member</div>
            <div className="underline"></div>
            <div className="memberList">
                <div className="addMember" onClick={() => { setIsModalOpen(!isModalOpen) }}>
                    <div className="add-member">
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                    </div>
                    <span className="add">Add member</span>
                </div>
                {isModalOpen ?
                    <div className="modal">
                        <div className="add-member-modal">
                            <Inputs className='input' />
                            <Inputs className='input' />
                        </div>
                    </div> : null}
            </div>
        </div>
    )
} 
