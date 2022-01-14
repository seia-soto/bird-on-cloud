import { styled } from '../styles/theme'

export const Container = styled('div', {
  fontFamily: '$system',

  margin: '0 auto',

  variants: {
    size: {
      xl: {
        maxWidth: '1920px'
      },
      lg: {
        maxWidth: '1680px'
      },
      md: {
        maxWidth: '1100px'
      },
      sm: {
        maxWidth: '900px'
      },
      xs: {
        maxWidth: '750px'
      }
    }
  }
})

export default Container
