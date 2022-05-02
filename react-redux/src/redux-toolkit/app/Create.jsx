import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {showGreetings} from '../redux/users/usersSlice';

const Create = () => {

  const dispatch = useDispatch();
  const {greetings} = useSelector(state => state.usersSlice);

  useEffect(() => {
    dispatch(showGreetings());
  }, [])
  

  return (
    <div>
      <h2>Create users</h2>
      <h3> {greetings} </h3>
    </div>
  )
}

export default Create