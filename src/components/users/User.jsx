import React from 'react'
import {useMutation, useQueryClient} from 'react-query'
//import {ThreeDots} from 'react-loaders-spinners'
import {
    Stack,
    Button,
    Avatar 
}from '@mui/material'
import {removeUser} from '../.././apis'
import './users.css'
import Image from '../componentUtilities/Image'

const User = ({Id,name,email,password,setRoutation,setValues}) => {
    const queryClient = useQueryClient()
    
    // remove Email
    const {mutateAsync:mutateDelete} = useMutation(removeUser)
    const handleRemove = async (id)=>{
       await mutateDelete(id)
       queryClient.invalidateQueries('users')
    }

    // update Email
    const handleUpdate = async (id)=>{
       setValues({
        name:name,
        email:email,
        password:password,
        id:id
       })
       console.log('update id',id);
       setRoutation('validate')
    }

   return (
    <Stack className='User'>
        <Stack className='name userItem userProfile' direction='row' spacing={2}>
        <Avatar>
                <Image src='img/ibrahim.jpg' maxWidth='40px' maxHeight='40px' />
        </Avatar>
            <span className='text name'>{name}</span>
        </Stack>
        <Stack className='email userItem' direction='row' spacing={2}>
            <span className='text'>Email: </span>
            <span className='var'>{email}</span>
        </Stack>
        <Stack className='password userItem' direction='row' spacing={2}>
            <span className='text'>Password: </span>
            <span className='var'>{password}</span>
        </Stack>
        <Stack className='id userItem' direction='row' spacing={2}>
            <span className='text'>Id: </span>
            <span className='var'>{Id}</span>
        </Stack>
        <Stack className='id userItem btnsItem' direction='row' spacing={2}>
            <Button variant='outlined'className='remove-account mg-5' onClick={()=>handleRemove(Id)}>
                Remove Account
            </Button>
            <Button variant='contained'className='remove-account mg-5' onClick={()=>handleUpdate(Id)}>
                Update Account
            </Button> 
        </Stack>
    </Stack>
  )
}


export default User