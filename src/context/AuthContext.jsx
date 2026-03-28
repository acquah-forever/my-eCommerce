import React,{useState,createContext} from 'react'

export const AuthContext = createContext(null)

export default function AuthProvider({children}){
    
    const [user,setUser] = useState(null)

    function signUp(email, password){
        const users = []
        // list of users already stored
        const newUser = {email, password}
        // details of new user
        users.push(newUser)
        // add new user to list of users existing already
        localStorage.setItem('users',JSON.stringify(users))
        // finally save list in local storage
    }

    function logIn(){

    }
    return <AuthContext.Provider value={{signUp}}>{children}</AuthContext.Provider>

}

    // null because user is not logged in yet.
