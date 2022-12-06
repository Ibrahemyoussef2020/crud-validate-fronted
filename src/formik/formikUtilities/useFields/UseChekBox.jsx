import {Box,Checkbox} from '@mui/material'
import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon  from '@mui/icons-material/Bookmark';

const UseChekBox = (props) => {
    const {name,label,value,checked,onChange,
      customIcon,customCheckedIcon,...rest} = props
  return (
    <Box className='CheckBox'>
        <Checkbox
            name={name}
            value={value}
            id={name}
            checked={checked}
            onChange={onChange}
            icon={customIcon || <BookmarkBorderIcon />}
            checkedIcon={customCheckedIcon || <BookmarkIcon />}
          {...rest}
        />
        <label  htmlFor={name}>{label}</label>
    </Box>
  )
}

export default UseChekBox