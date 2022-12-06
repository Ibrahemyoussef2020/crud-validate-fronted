
import Control from '../formikUtilities/FormikControl'
import{ useState } from 'react'
import{
  Box,
  Grid,
  InputAdornment,
  Typography,
  Button,
} from '@mui/material'
import * as m from '../../notifications'
import {toastify,ToastifyContainer} from '../../notifications';
import * as g from '../formikUtilities/Character'


import {TEXTFIELD,CHEKBOX,CHECK_GENE,INPUT_GENE} from  '../formikUtilities/FormikTypes';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import {hasAnoneChildBorder} from '../../components/classes/classes'
import { color } from '@mui/system'


const ValidateFuns = () => {
  const [copy,setCopy] = useState({
    time:2800,
    color:'#1976d2'
  })  
  const [validateValues,setValidateValuse] = useState({
        passwordLenght : 20,
        password : '',
        includesUpperCase:false,
        includesLowerCase:true,
        includesNumbers:false,
        includesSymbols:false,
    })
   
     
    const isCopied = ()=>{
      setTimeout(()=>setCopy({...copy,color:'#1976d2'}),copy.time + 1000)
      if(validateValues.password === ''){
        setCopy({...copy,color:'#f00'})
       return toastify(m.notCopied,'error')
      }else{
        navigator.clipboard.writeText(validateValues.password)
        setCopy({...copy,color:'#080'})
        return toastify(m.copied,'success')
      }
    }   
    const handleStrings = (e)=>{
      const {value,name} = e.target   
      setValidateValuse({
        ...validateValues,
        [name]:value   
      })
    }
    const handleBooleans = (e)=>{
      const {checked,name} = e.target   
      setValidateValuse({
        ...validateValues,
        [name]:checked 
      })
    }

    const createPassword = (charactersList)=>{
      let password = ''
      const charactersLength = charactersList.length
      for(let i=0;i<validateValues.passwordLenght;i++){
        const characterIndex = Math.round(Math.random() * charactersLength)
        password = password.concat(charactersList.charAt(characterIndex))
      }
      console.log(charactersLength);
      console.log(validateValues.passwordLenght);
      return password
    }

    const handleGenerate = ()=>{
      let charGenerate = ''
      if(validateValues.includesLowerCase)  charGenerate = charGenerate.concat(g.Lowercase)
      if(validateValues.includesUpperCase)  charGenerate = charGenerate.concat(g.Uppercase)
      if(validateValues.includesNumbers)    charGenerate = charGenerate.concat(g.Numbers)
      if(validateValues.includesSpicialCar) charGenerate = charGenerate.concat(g.SpicialCar)
      setValidateValuse({
        ...validateValues,
        password:createPassword(charGenerate)
      })
    }

   

    return (
      <>
      <Grid className='CardGenetrater' container sx={{
        maxWidth:'350px',
        padding:'1rem .5rem',
        flexDirection:'column',
        border:'1px solid #ccc',
        borderRadius:'7px'
      }}>
        <Box>
          <Typography variant='h6' component='div'>
          Password Generation
          </Typography>
          <Control 
              control={INPUT_GENE}
              type='text'
              name='screen'
              placeholder={validateValues.password}
              InputProps={{
                endAdornment:(
                    <InputAdornment position='end'>
                        <FileCopyIcon 
                          onClick={isCopied}
                          sx={{zIndex:'1000',
                          cursor:'pointer',  
                          color:copy.color,    
                        }}
                        />
                    </InputAdornment>
                )
              }}
            />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around'}}>
          <Control 
            control={INPUT_GENE}
            type='range'
            value={validateValues.passwordLenght}
            onChange={handleStrings}
            name='passwordLenght'
            className={hasAnoneChildBorder}
          />
          <Control 
            control={INPUT_GENE}
            type='number'
            value={validateValues.passwordLenght}
            onChange={handleStrings}
            name='passwordLenght'
            sx={{maxWidth:'70px'}}
            className={hasAnoneChildBorder}
          />
        </Box>
        <Control 
          control={CHECK_GENE}
          checked={validateValues.includesUpperCase}
          onChange={handleBooleans}
          name='includesUpperCase'
          label='includes UpperCase'
        />
        <Control 
          control={CHECK_GENE}
          checked={validateValues.includesLowerCase}
          onChange={handleBooleans}
          name='includesLowerCase'
          label='includes LowerCase'
        />
        <Control 
          control={CHECK_GENE}
          checked={validateValues.includesNumbers}
          onChange={handleBooleans}
          name='includesNumbers'
          label='includes Numbers'
        />
        <Control 
          control={CHECK_GENE}
          checked={validateValues.includesSymbols}
          onChange={handleBooleans}
          name='includesSymbols'
          label='includes Symbols'
        />
        <Button onClick={handleGenerate}>
          Send Inform
        </Button>
      </Grid>
      
      <ToastifyContainer/>
      
      </>
    )
}

export default ValidateFuns


