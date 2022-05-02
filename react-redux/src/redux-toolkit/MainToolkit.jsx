import React from 'react';
import { Provider } from 'react-redux';
import Create from './app/Create';
import store from './redux/store';


const MainToolkit = () => {
  return (
    <>
    <Provider store={store} >
      <h1>Redux Toolkit</h1>
      <Create />
    </Provider>
    </>
  )
}

export default MainToolkit