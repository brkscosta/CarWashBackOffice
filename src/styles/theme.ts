interface Themes {
  dark: {
    background: string
    text: string
    primary: string
  }

  light: {
    background: string
    text: string
    primary: string
  }
}

const theme: Themes = {
  dark: {
    background: '#121214',
    text: '#e1e1e6',
    primary: '#8257e6'
  },
  light: {
    background: '#e1e1e6',
    text: '#121214',
    primary: '#8257e6'
  }
}

export default theme
