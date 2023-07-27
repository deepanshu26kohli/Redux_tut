import React from 'react'
import HomeContainer from './Containers/HomeContainer'
import './App.css'
import HeaderContainer from './Containers/HeaderContainer'
import Comp1Container from './Containers/Comp1Container'
import Comp2Container from './Containers/Comp2Container'
const App = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <HomeContainer />
      <Comp1Container/>
      <Comp2Container/>
    </div>
  )
}
export default App
