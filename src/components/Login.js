import React from 'react'
import { auth, providers } from '../config/firebase'

function Login() {

  const login = () => {
    auth.signInWithPopup(providers.google()) 
      .then(console.log)
      .catch(console.log)
  }

  return (
    <button className="login" onClick={login}>
      Login
    </button>
  )
}

export default Login
