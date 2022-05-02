import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/contador/actions';

const Get = () => {

  const dispatch = useDispatch();
  const { loading, failed, users } = useSelector(state => state.usersReducer);

  const handleGetUsers = () => dispatch(getUsers());
  return (
    <div>
      <h2>get users</h2>
      {
        failed && <h4>Ha ocurrido un error</h4>
      }
      {
        loading && <h4>Buscando...</h4>
      }
      {
        users && users.map(({ id, name, age }) =>
          <div key={id}> {name} - {age}  </div>
        )
      }
      <button
        onClick={handleGetUsers}
      >Get users</button>
      <hr />
    </div>
  )
}

export default Get