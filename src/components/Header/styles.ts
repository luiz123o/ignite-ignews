import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.detail};

    button {
      margin-left: auto;
    }
  `}
`
export const Content = styled(motion.header)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  max-width: 63.75rem;
  height: 5rem;
`
interface LinkProps {
  activeStats: boolean
}
export const NavItems = styled(motion.nav)`
  margin-left: 5rem;
  height: 100%;
`
export const MenuLink = styled(motion.a)<LinkProps>`
  ${({ theme, activeStats }) => css`
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${theme.colors[activeStats ? 'titles' : 'text']};
    transition: color 0.2s;
    & + a {
      margin-left: 2rem;
    }
    &:hover {
      color: ${theme.colors.yellow};
    }

    ${activeStats &&
    css`
      color: ${theme.colors.titles};
      font-weight: bold;

      ::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${theme.colors.yellow};
      }
    `}
  `}
`
