import React from 'react'
import {
  Button,
  Box,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import * as styled from './SignIn.style'

const SignIn = () => {
  return (
    <styled.Container>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4">Winner League</Typography>
        <Typography>Gerenciador de Campeonatos</Typography>
      </Box>
      <styled.TitleText sx={{ color: '#FFCE21' }}>
        Gerencie seus campeonatos{' '}
      </styled.TitleText>
      <styled.TitleText>de uma forma fácil!</styled.TitleText>
      <TextField
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          )
        }}
        variant="filled"
      />
      <TextField
        id="input-with-icon-textfield"
        label="Senha"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
        variant="filled"
      />
      <Button variant="contained">Entrar</Button>
      <Box sx={{ display: 'flex' }}>
        <Typography>Ainda não tem uma conta? </Typography>
        <Typography>Cadastre-se</Typography>
      </Box>
    </styled.Container>
  )
}

export default SignIn
