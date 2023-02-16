export const currentUserSelector = (store) => {
    return store.authReducer.currentUser
}

export const authErrorSelector = (store)=>{
    return store.authReducer.error
}
