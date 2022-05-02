import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createUser } from '../redux/contador/actions'

const Create = () => {
  const dispatch = useDispatch();
  const { lastCreated, loading, failed } = useSelector(state => state.usersReducer);

  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({ name: '', age: 0 });
  const { name, age } = userData;
  const handleInput = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleCreateUser = () => {
    if ([name, age].some(value => value === '')) return setError(true);
    return dispatch(createUser(userData));
  }

  return (  
    <div>
      <h2>Create user</h2>
      {loading && <h4>Creando</h4>}
      {failed && <h4>Algo ha salido mal</h4>}
      {lastCreated && <p>Último creado : {lastCreated.name} </p>}

      <input type="text" name='name' value={name} onChange={handleInput} placeholder="name" />
      <input type="number" name='age' value={age} onChange={handleInput} placeholder="age" />
      {error && <h4>Sin campos vacíos</h4>}
      <button onClick={handleCreateUser}>create</button>
      <hr />
    </div>
  )
}

export default Create