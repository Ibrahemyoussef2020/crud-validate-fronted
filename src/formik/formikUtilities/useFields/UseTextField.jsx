import { Field,ErrorMessage} from 'formik'
import {TextField,Box} from '@mui/material'
import Br from '../../../components/componentUtilities/Br'

const UseTextField = (props) => {
    const {name,label,validate,onChange,...rest} = props
  return (
    <>
    <Box className='TextField-container'>
        <Field 
            as={TextField}
            name={name} label={label}
            validate={validate}
            //onChange={onChange}
            {...rest}
            sx={{ textAlgin:'center' }} 
        />
        <ErrorMessage name={name} 
        component='div' 
        className='error-color' />
    </Box>
    <Br h='15px'/>
    </>
  )
}

export default UseTextField