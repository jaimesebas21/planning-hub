import { Box, Button, TextField } from "@mui/material"
import { Form, useNavigate } from "react-router-dom"
import '../styles/authentication.css'

function Register() {
    const navigation = useNavigate()
  return (
    <div className="Form-Login">


    <Box
      className='shadowed-component'
      
      sx={{

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: '#ffffff',
        height: '400px',
        borderRadius: 2,
        padding: 5
      }}
    >

      <Form method="POST" style={{marginBottom:20}}>

        <TextField
          required
          id="name"
          label="Nombres"
          type="text"
          variant="filled"
          name='name'
        />
        <br />
        <TextField
          required
          id="last-name"
          label="Apellidos"
          type="text"
          variant="filled"
          name='lastName'
        />
        <br />
        <TextField
          required
          id="email"
          label="Correo"
          type="text"
          variant="filled"
          name='email'
        />
        <br />
        <TextField
          required
          id="telephone"
          label="Telefono"
          type="text"
          variant="filled"
          name='telephone'
        />
        <br />
        
        <Button variant="contained" color="primary" type='submit'>
          Completar Registro
        </Button>
      </Form>
        <Button variant="contained" color="error" onClick={()=> navigation(-1)}>
          Cancelar
        </Button>
    </Box>
  </div>
  )
}

export default Register