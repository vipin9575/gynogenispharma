import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1497c7',
      dark: '#214f8b',
    },
    secondary: {
      main: '#efb5a5',
    },
    background: {
      default: '#fffdfd',
      paper: '#ffffff',
    },
    text: {
      primary: '#181818',
      secondary: '#295a97',
    },
  },
  typography: {
    fontFamily: ['Sarabun', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Marcellus','Georgia', 'Times New Roman', 'serif'].join(','),
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 20,
  },
})

export default theme
