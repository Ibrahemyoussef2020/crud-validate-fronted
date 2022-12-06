import React from 'react'
import * as f from './FormikTypes'
import UseChekBox from './useFields/UseChekBox'
import UseTextField from './useFields/UseTextField'
//import CheckGene from './useFields/CheckGene'
import InputGene from './useFields/InputGene'
const FormikControl = (props) => {
    const {control,...rest} = props
  switch(control){
    case f.TEXTFIELD : return <UseTextField {...rest} />
    case f.CHEKBOX : return <UseChekBox {...rest} />
    case f.CHECK_GENE: return <UseChekBox {...rest} />
    case f.INPUT_GENE:return <InputGene {...rest} /> 
    default: return null
  }
}

export default FormikControl