import 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Mainbanner from '../components/Mainpage/Mainbanner'
import Toprequest from '../components/Mainpage/Toprequest'
import Features from '../components/Mainpage/Features'

const Appcontainer = styled.section`
  background-color:var(--background-clr-1);
  min-height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
`


function MainPage() {
  return (
    <Appcontainer>
      <Navbar/>
      <main style={{maxWidth:"1300px"}}>
        <Mainbanner/>
        <Toprequest/>
        <Features/>

      </main>
    </Appcontainer>
  )
}

export default MainPage;