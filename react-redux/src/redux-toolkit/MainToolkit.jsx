import React from 'react';
import { Provider } from 'react-redux';
import Get from './app/Get';
import store from './redux/store';


const MainToolkit = () => {
  return (
    <>
    <Provider store={store} >
      <h1>Redux Toolkit</h1>
      <Get />
    </Provider>
    </>
  )
}

export default MainToolkit