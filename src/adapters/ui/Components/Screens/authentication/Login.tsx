import { Box, Button, TextField } from '@mui/material'
import "../styles/authentication.css"
import { Form, redirect, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks'


interface Props {
  request: any,
  params: any
}

export async function action({request, params}:Props) {
  const formData = await request.formData();
  const { userName, password } = Object.fromEntries(formData);
  //TODO: sendEnpoint login
  return redirect(`/home`);
}

export default function Login() {
  const dispatch = useAppDispatch()
  const navigation = useNavigate()
  // const { userName } = useAppSelector((state) => state.authentication )
  
  return (
    <div className='Container-Authenticate'>
      {/* <div className=''> */}
      <div className="Form-Login">

        <Box
          className='shadowed-component'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
            '& .MuiTextField-root': { m: 1, width: '40ch' },
            backgroundColor: '#ffffff',
            height: '250px',
            borderRadius: 2,
            padding: 5
          }}
        >

          <Form method="POST">

            <TextField
              required
              id="filled-search"
              label="User Name"
              type="text"
              variant="filled"
              name='userName'
            />
            <br />
            <TextField
              required
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              name='password'
            />
            <br />
            <Button sx={{marginBottom:'20px'}} variant="contained" color="success" type='submit'>
              Ingresar
            </Button>
          </Form>
            <Button variant="contained" color="primary" onClick={() => navigation('register')}>
              Registrate
            </Button>
            {/* <Button variant="contained" color="primary" onClick={() =>dispatch(setByValue('testu'))}>
              Test
            </Button> */}
        </Box>
      </div>
      {/* </div> */}
    </div>
  )
}
