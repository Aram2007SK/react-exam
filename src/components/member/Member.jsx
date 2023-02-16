import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { membersListSelector } from "../../redux/selectors/membrsSelector";
import AddMemberModal from "../modal/AddMemberModal";
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
                {isModalOpen ?<AddMemberModal/> : null}
            </div>
        </div>
    )
} 
