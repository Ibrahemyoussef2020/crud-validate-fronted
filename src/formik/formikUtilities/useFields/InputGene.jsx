import {TextField,Grid} from '@mui/material'

const InputGene = (props) => {
    const {name,label,value,onChange, className,...rest} = props

  return <Grid item className='screen-container'>
      <TextField 
        title='TextField'
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        className={className}
        {...rest}
  />
  </Grid>
}

export default InputGene