import React, { useState, createContext } from 'react'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(localStorage.getItem('currentUserEmail') ?
        { email: localStorage.getItem('currentUserEmail') } : null)

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        // list of users that have accounts.
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Account Already Exists' }
        }
        const newUser = { email, password }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('currentUserEmail', email)
        // save users info for automatically logging in
        setUser({ email })
        return { success: true }
    } 

    function logIn(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        // list of users that have acccounts already
        const user = users.find(u => u.email === email && u.password === password)
        // find the specific user who is logging in
        if (!user) {
            return { success: false, error: 'Invalid email or password' }
        }
        localStorage.setItem('currentUserEmail', email)
        setUser({ email })
        return { success: true }
    }

    function logOut( ) {
        localStorage.removeItem('currentUserEmail')
        setUser(null)

    }

    return <AuthContext.Provider value={{ signUp, user, logOut, logIn }}>{children}</AuthContext.Provider>
     
}
