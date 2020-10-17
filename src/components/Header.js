import React from 'react'
import { AppName } from '../config/gratefulConfig'

function Header() {
  return (
    <div className="header">
      <h1>{AppName}</h1>
    </div>
  )
}

export default Header
