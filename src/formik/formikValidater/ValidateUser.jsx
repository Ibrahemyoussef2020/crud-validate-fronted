import {
Card,
CardHeader,
CardContent,
Button,
Box
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import {
Formik,
Form
} from 'formik'
    
import * as Yup from 'yup'

import {useQuery,useMutation, useQueryClient} from 'react-query'

import * as f from '.././formikUtilities/FormikTypes'
import Control from '../formikUtilities/FormikControl'
import {SpicialCar} from '../formikUtilities/Character'
import { Margin } from '@mui/icons-material'

import '.././formik.css'
import { addUser, modifyUser } from '../../apis'



const validateName = (values)=>{
    let errors = ''
    const Space = values.split('').filter(v =>/\s/.test(v))
    if(Space.length < 1) errors += ' | you must type your last name | '
    console.log(Space);
    return errors
}

const validatePass = (values)=>{
    let errors = '';
    
   const Uppervalue = values.split('').filter(v =>/[A-Z]/.test(v)=== true)
   const Lowervalue = values.split('').filter(v => /[a-z]/.test(v))
   const NumbValue  = values.split('').filter(v => /[0-9]/.test(v))
   const Spicieal    = values.split('').filter(v => SpicialCar.split('').find(s => s === v))
   if(NumbValue < 2) errors +=  ' | we wont 2 number | '
   
   if(Uppervalue.length < 2) errors += ' | we wont 2 upper | '
   
   if(Lowervalue.length < 2) errors += ' | we wont 2 lower | '
   
   if(Spicieal.length < 2) errors += ' | we wont 2 character | '
   
    return errors
}
   
const validationShcema = Yup.object({
    name:Yup.string().required('type your name'),
    email:Yup.string().required('type your email').email('invalid Email'),
    password:Yup.string().required('type your password'),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'),null],'the pass and confirm should the same')
    .required('re enter the password')
})



const ValidateUser = ({setRoutation,initvalues,setValues}) => {
    const queryClient =  useQueryClient()

// initial values

const initialValues = {
    name:initvalues.name || '',
    email:initvalues.email || '',
    password:initvalues.password ||'',
    confirmPassword:initvalues.password ||'',
    id : Math.random().toString() 
}
 
    // add user 
    const {mutateAsync : mutateAddAsync} = useMutation(addUser)

    // update user
    const {mutateAsync : mutateUpdteAsync} = useMutation(modifyUser)
    
    const onSubmit = async (values,onSubmitProps)=>{
        // add user
        const targetId = initvalues.id
        if(initvalues.password === ''){
            await mutateAddAsync({
                name:values.name,
                email:values.email,
                password:values.password,
                id:values.id,
            })
        }else{
            // update user
            const newValues = {
                name:values.name,
                email:values.email,
                password:values.password,
                id:initvalues.id,
            }
            await mutateUpdteAsync({targetId,...newValues})
        }
        queryClient.invalidateQueries('users')
        
        // show the Email in the list
        setRoutation('control')
        
        // reset the valiue after submitting
        onSubmitProps.resetForm()
        setValues({
            name:'',
            email:'',
            password:'',
            id:null
        })
    }

    return (
    <Card className='CardValidator' sx={{
        maxWidth:'300px',
        boxShadow:'0px 2px 1px -1px rgb(0 0 0 / 50%), 0px 1px 1px 0px rgb(0 0 0 / 50%), 0px 1px 3px 0px rgb(0 0 0 / 50%)',
        margin:'1rem auto',
    }}>
        <CardContent>
            <CardHeader avatar={<AccountCircleIcon/>}
                title='Well Come' 
                subheader='Fill the fields to sign'
            />         
            <Formik
                initialValues={initialValues}
                validationSchema={validationShcema}
                onSubmit={onSubmit}
            >
            {formik =>(        
                <Form className='form'>
                    {console.log(formik)}
                    <Control
                        control={f.TEXTFIELD}
                        type='text' 
                        name='name' 
                        label='your name'
                        className='nameClass block'
                        validate={validateName}
                    />
                    <Control
                        control={f.TEXTFIELD}
                        type='email' 
                        name='email' 
                        label='your email'
                        className='emailClass block'
                    />
                    <Control
                        control={f.TEXTFIELD}
                        type='text'  
                        name='password' 
                        label='your password'
                        className='passwordlClass block'
                        validate={validatePass}
                    />               
                    <Control
                        control={f.TEXTFIELD}
                        type='text'  
                        name='confirmPassword' 
                        label='confirm password'
                        className='passwordlClass block'
                    />
                    <Box className='submit-container'>
                        <Button
                            className='block'
                            type='submit'>
                                Sign
                        </Button>
                    </Box>
                </Form>
            )}
            </Formik>
        </CardContent>
    </Card>
    )
}

export default ValidateUser
 

    
 