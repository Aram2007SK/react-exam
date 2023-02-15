import { put, takeLatest } from "redux-saga/effects";
import { setCurrnetUser, setError, setMembers, signIn } from "../redux/actions/logInActions";
import { authType } from "../redux/types/types";

function* authLogin() {
    let currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
        currentUser = JSON.parse(currentUser)
        console.log('asfasdfsdax',typeof currentUser);
        let membersList = localStorage.getItem('membersList')
        yield put(setCurrnetUser(currentUser))
        yield put(setMembers(membersList))
    }
}

function* SignIn({ payload }) {
    let membersList = localStorage.getItem('membersList')
    if (membersList) {
        membersList = JSON.parse(membersList)
        let currentUser = membersList.find((el) => {
            return el.login === payload.login && el.password === payload.password
        })
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            yield put(setCurrnetUser(currentUser))
            yield put(setMembers(membersList))
        } else {
            yield put(setError('invalid login or password'))
        }
    }
}

function* logOut() {
    localStorage.removeItem('currentUser')
    yield put(setCurrnetUser(null))
}

export function* authSaga() {
    yield takeLatest(authType.AUTH_LOGIN, authLogin)
    yield takeLatest(authType.LOGOUT, logOut)
    yield takeLatest(authType.LOGIN, SignIn)
}