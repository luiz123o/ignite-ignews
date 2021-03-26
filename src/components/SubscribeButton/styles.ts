import { motion } from 'framer-motion'
import { darken, tint } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled(motion.button)`
  ${({ theme }) => css`
    height: 4rem;
    width: 260px;
    border: 0;
    border-radius: 2rem;

    background: ${theme.colors.yellow};
    color: ${theme.colors.background};

    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: ${tint(0.08, theme.colors.yellow)};
      color: ${darken(0.5, theme.colors.text)};
    }
  `}
`
