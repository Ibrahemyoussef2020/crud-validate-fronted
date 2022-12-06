import React from 'react'
import {useQuery} from 'react-query'
import { getUsers } from '../../apis/api'
import User from './User'
import {ToastifyContainer,toastify} from '../../notifications'

const Users = ({setRoutation,setValues}) => {
    const {data:users,isError,isLoading} = useQuery('users',getUsers)
   

    if(isLoading){
      return toastify('ather','Wait data is Loading')
    }

    if(isError){
      return toastify('error','Error:failed loading data')
    }
 
    return (
      <>
      {users?.map(({id,name,email,password})=> <React.Fragment key={id}>
      <User Id={id}
        name={name}
        email={email}
        password={password}
        setRoutation={setRoutation}
        setValues={setValues}
      />
    </React.Fragment>)}
    <ToastifyContainer/>
    </>
  )
}

export default Users