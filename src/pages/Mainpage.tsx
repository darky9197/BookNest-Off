import { useEffect, useReducer } from 'react';
import styled from 'styled-components';


import Nav from '../components/Navbar';
import Mainbanner from '../components/Mainpage/Mainbanner'
import Toprequest from '../components/Mainpage/Toprequest'
import Features from '../components/Mainpage/Features'
import { ACTIONS, AppContext } from '../Contexts';
import { ActionType } from '../Types/GlobalTypes';


function reducer(data , action: ActionType) {
  switch (action.type) {
    case ACTIONS.SET_LOGIN_STATE:
      if (action.payload?.data) {
        data = { ...data, loginState: true };
      } else {
        data = { ...data, loginState: false };
      }
      return data;

    default:
      return data;
  }
}

const Appcontainer = styled.section`
  background-color:var(--background-clr-1);
  min-height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  `

function MainPage() {

  const [data, dispatch] = useReducer(reducer, {
    searchValue: "",
    loginState: false
  });

  const ContextValue = {
    data,
    dispatch
  }

  // const handleSearch = (value: string | null) => {
  //   setSearchValue(value);
  // }

  useEffect(() => {
    const user = localStorage.getItem("userToken");
    // console.log(user);

    if (user == null) {
      dispatch({ type: ACTIONS.SET_LOGIN_STATE, payload: { data: false } });
    } else {
      dispatch({ type: ACTIONS.SET_LOGIN_STATE, payload: { data: true } });
    }
  }, [data.loginState]);

  return (
    <AppContext.Provider value={ContextValue}>
      <Appcontainer>
        <Nav />
        <main style={{ maxWidth: "1300px" }}>
          <Mainbanner />
          <Toprequest />
          <Features />
        </main>
      </Appcontainer>
    </AppContext.Provider>
  )
}

export default MainPage;