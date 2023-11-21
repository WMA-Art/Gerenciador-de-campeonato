import React from 'react'
import { Box } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={sxStyle.containerBox}>
      <nav id="navbr">
        <h2>
          <Link to="/">WinnerLeague</Link>
        </h2>
        <Link to="/signup">Cadastra-se</Link>
      </nav>
      <h2>Gerenciador de campeonato</h2>
      <Outlet />
    </Box>
  )
}

export default NavBar
