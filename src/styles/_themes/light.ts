import dark from './dark'

const light: typeof dark = {
  ...dark,
  colors: {
    ...dark.colors
  }
}
export default light
