import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {showGreetings, getUsers} from '../redux/users/usersSlice';

const Get = () => {

  const dispatch = useDispatch();
  const {greetings, users, loading, failed} = useSelector(state => state.usersSlice);

  useEffect(() => {
    dispatch(showGreetings());
  }, [])
  
  const handleUsers = () => dispatch(getUsers());

  return (
    <div>
      <h2>Create users</h2>
      <h3> {greetings} </h3>
      {loading && <h4>trayendo</h4>}
      {failed && <h4>Algo ha salido mal</h4>}
      {
        users && users.map(({id, name, age}) => 
          <div key={id} > {name} - {age}  </div>
        )
      }
      <button onClick={handleUsers} >Get users</button>
    </div>
  )
}

export default Get