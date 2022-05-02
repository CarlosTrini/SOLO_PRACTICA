import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser, editUser } from '../redux/contador/actions';

const DeleteEdit = () => {

  const dispatch = useDispatch();
  const { users } = useSelector(state => state.usersReducer);

  const handleEdit = (user) => {
    user.name = user.name + 'editado';
    dispatch(editUser(user));
    location.reload();
  }
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    location.reload();
  }

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h2>Delete & Edit user</h2>
      {
        users && users.map(({ id, name, age }) =>
          <div key={id}>
            {name} -
            {age} -
            <button onClick={() => handleDelete(id)} >Delete</button> -
            <button onClick={() => handleEdit({id, name, age})}> Edit</button>
          </div>
        )
      }
      <hr />
    </div>
  )
}

export default DeleteEdit