import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

export const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '0.625rem',
  // width: '100%',
  // height: '100vh',
  color: 'white',
  paddingLeft: '10%'
}))

export const TitleText = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: '600'
  // lineHeight: '3.375rem'
}))
