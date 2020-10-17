import React from 'react'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const [user, loading, error, auth, providers] = useAuth() 

  const login = () => {
    console.log('providers', JSON.stringify(providers));
    auth.signInWithPopup(providers.google)
      .then(console.log)
      .catch(console.error)
  }

  return (
    <button className="login" onClick={login}>
      Login
    </button>
  )
}

export default Login
