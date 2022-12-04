import React from 'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from "./components/SecondComponent"
import ThirdComponent from './components/ThirdComponent'
const Layout = () => {
  return (
    <div className="layout">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
    </div>
  )
}

export default Layout