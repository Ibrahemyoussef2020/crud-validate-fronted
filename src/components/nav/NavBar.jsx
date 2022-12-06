import {
    Tab,
    Box
} from '@mui/material'
import {
TabList,
TabPanel,
TabContext
} from '@mui/lab'
import ValidateUser from '../../formik/formikValidater/ValidateUser'
import GeneratePassword from '../../formik/formikGenerater/GeneratePassword'
import Users from '../users/Users'
import { useState } from 'react'
import { Stack } from '@mui/system'

import './navBar.css'

const NavBar = () => {
    const [routation,setRoutation] = useState('validate')
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        id:null
    })
    const handleRoutation = (e,lastChange)=>{
        setRoutation(lastChange)
    }
  return (
    <Box className='Nav-container' sx={{width:'100% !important'}}>
        <TabContext value={routation}>
            <Stack direction='row'
                className='tab-list-container'
            >
                <TabList onChange={handleRoutation}
                textColor='secondary'
                indicatorColor='secondary'
                className='tab-list'
                >
                    <Tab label = 'Validate-sign' value='validate'/>
                    <Tab label = 'Generate-password' value='generate'/>
                    <Tab label = 'Emails-list' value='control'/>
                </TabList>
            </Stack>            
            <TabPanel value='validate'>
                <ValidateUser           
                    setRoutation={setRoutation}
                    initvalues={values}
                    setValues={setValues}
                />
            </TabPanel>
            <TabPanel value='generate'><GeneratePassword/></TabPanel>
            <TabPanel value='control'>
                <Users
                    setRoutation={setRoutation}
                    setValues={setValues}
                />
            </TabPanel>            
        </TabContext>
    </Box>
  )
}

export default NavBar