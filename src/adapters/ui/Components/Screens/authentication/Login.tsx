import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import "../styles/authentication.css"

export default function Login() {
  return (
    <div className="Form-Login">

   
    <Box
    className='shadowed-component'
    component="form"
    autoComplete="off"
    noValidate={true}
      sx={{
    
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        display:'flex',
        '& .MuiTextField-root': { m: 1, width: '50ch' },
         backgroundColor: '#ffffff',
         height:'400px',
         borderRadius:2,
         padding:5
      }}
    >
         <TextField
        required
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <br/>
        <TextField
        required
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <br/>
        <Button variant="contained" color="success" type='submit'>
            Login
        </Button>
    </Box>
    </div>
  )
}
