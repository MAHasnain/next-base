import { Box } from '@mui/material'
import Input from './Input'
import TextArea from './TextArea'
import FormButton from './FormButton'

const ContactForm = () => {
  return (
    <>

      <section>
        <Box
          sx={{ borderColor: "gray", border: "2px", borderRadius: "5px" }}
        >
          <form action="">

            <Input label="First Name" placeholder="Doe" />

            <Input label="Last Name" placeholder="Enter last name" />

            <Input label="Email Address" placeholder="john.doe@example.com" />

            <Input label="Phone Number" placeholder="+1234567890" />

            <TextArea placeholder='Anything else you wanna communicate' />

            <FormButton text="Submit" />
          </form>
        </Box>
      </section>

    </>
  )
}

export default ContactForm