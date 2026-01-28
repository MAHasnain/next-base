import { InputProps } from "@/types/int"
import { Box, TextField } from "@mui/material"

const Input = ({label, placeholder} : InputProps) => {
  return (
    <>
     <Box>
        <TextField
        // required
        label={label}
        placeholder={placeholder}
        sx={{'& .MuiOutlinedInput-root': {
            borderRadius: '25px'}}}
        />
     </Box>
    </>
  )
}

export default Input