export const currentUserSelector = (store) => {
    return store.authReducer.currentUser
}

export const authErrorSelector = (store)=>{
    return store.authReducer.error
}

export const membersListSelector = (store)=>{
    return store.authReducer.membersList
}