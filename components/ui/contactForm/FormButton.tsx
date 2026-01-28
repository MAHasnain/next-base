import { ButtonProps } from "@/types/int"
import { Button } from "@mui/material"

const FormButton = ({ text }: ButtonProps) => {
  return (
    <>

      <Button sx={{backgroundColor: "blue"}} variant="contained">{text}</Button>

    </>
  )
}

export default FormButton