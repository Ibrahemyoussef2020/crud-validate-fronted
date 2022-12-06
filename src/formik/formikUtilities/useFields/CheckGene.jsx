import {Grid,Checkbox} from '@mui/material'
import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon  from '@mui/icons-material/Bookmark';

const CheckGene = (props) => {
    const {name,label,value,checked,onChange,
      customIcon,customCheckedIcon,...rest} = props
  return (
    <Grid item>
        <Checkbox
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            icon={customIcon || <BookmarkBorderIcon />}
            checkedIcon={customCheckedIcon || <BookmarkIcon />}
          {...rest}
        />
        <label  htmlFor={name}>{label}</label>
    </Grid>
  )
}

export default CheckGene