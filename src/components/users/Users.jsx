import React from 'react'
import {useQuery} from 'react-query'
import { getUsers } from '../../apis/api'
import User from './User'
import {ToastifyContainer,toastify} from '../../notifications'

const Users = ({setRoutation,setValues}) => {
    const {data:users,isLoading,isError} = useQuery('users',getUsers)

    if(isLoading){
      toastify('loading your data', 'ather')
      return <ToastifyContainer/>
    }
    
    if(isError){
      toastify('Error:failed loading data', 'error')
      return <ToastifyContainer/>
    }
 
    return (
      users?.map(({id,name,email,password})=> <React.Fragment key={id}>
      <User Id={id}
        name={name}
        email={email}
        password={password}
        setRoutation={setRoutation}
        setValues={setValues}
      />
    </React.Fragment>)
  )
}

export default Users