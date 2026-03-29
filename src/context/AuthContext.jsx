import React, { useState, createContext } from 'react'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(localStorage.getItem('currentUserEmail') ?
        { email: localStorage.getItem('currentUserEmail') } :
        null)

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        // list of users already stored locally(Access Token)
        // converted string into an object with JSON.parse
        // if its users first time, then default to empty array []
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Email Already Exists' }
        }
        // if users' email is an email that is already an Access token,
        // then email already exists.
        const newUser = { email, password }
        // details of new user
        users.push(newUser)
        // add new user to list of users existing already
        localStorage.setItem('users', JSON.stringify(users))
        // finally save list in local storage  
        localStorage.setItem('currentUserEmail', email)
        // save users info to avoid logging off if user refreshes
        setUser({ email })
        // for automatic login
        return { success: true }
    }

    function logIn(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const user = users.find(u => u.email === email && u.password === password)
        if(!user){
            return{success:false, error:'Invalid email or password'}
        }
        localStorage.setItem('currentUserEmail', email)
        setUser({ email })
        return { success: true }
    }

    function logout() {
        localStorage.removeItem('currentUserEmail')
        setUser(null)

    }

    return <AuthContext.Provider value={{ signUp, user, logout, logIn }}>{children}</AuthContext.Provider>


}
