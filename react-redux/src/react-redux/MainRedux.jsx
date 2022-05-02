import React from 'react';
import { Provider } from 'react-redux';

import Create from './app/Create';
import DeleteEdit from './app/DeleteEdit'
import Get from './app/Get';
import store from './redux/store';

const MainRedux = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>React-Redux</h1>
        <Get />
        <Create />
        <DeleteEdit />
      </main>
    </Provider>
  )
}

export default MainRedux;