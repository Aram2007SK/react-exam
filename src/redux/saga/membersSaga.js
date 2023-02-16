import { put, takeLatest } from "redux-saga/effects";
import { setError } from "../actions/logInActions";
import { addMembers } from "../actions/memberAction";
import { membersType } from "../types/types";
function* addMember(payload) {
    let membersList = localStorage.getItem('membersList')
    if (membersList) {
        membersList = JSON.parse(membersList)
        let user = membersList.find((el)=>{
            return el.login !== payload.login && el.password !== payload.password
        })
    }
}

export function* membersSaga() {
    yield takeLatest(membersType.ADD_MEMBER, addMember)
}