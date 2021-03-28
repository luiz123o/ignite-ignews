import { motion } from 'framer-motion'
import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled(motion.button)`
  ${({ theme }) => css`
    height: 2.5rem;
    border-radius: 2rem;
    border: 0;
    padding: 0 1.5rem;

    background: ${darken(0.5, theme.colors.shape)};

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.titles};
    font-weight: bold;

    svg {
      width: 20px;
      height: 20px;
    }
    svg:first-child {
      margin-right: 1rem;
    }
    svg.closeIcon {
      width: 15px;
      height: 15px;
      margin-left: 1rem;
      color: ${darken(0.35, theme.colors.text)};
      &:hover {
        color: ${darken(0.7, theme.colors.text)};
      }
    }
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.4, theme.colors.shape)};
    }
  `}
`
