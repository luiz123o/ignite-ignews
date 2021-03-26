import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    max-width: 63.75rem;
    height: calc(100vh - 5rem);
    color: ${theme.colors.text};
  `}

  > img {
    z-index: -1;
  }
`
export const Content = styled(motion.section)`
  max-width: 600px;
  display: flex;
  flex-direction: column;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;
    span {
      color: ${({ theme }) => theme.colors.blue};
      font-weight: bold;
    }
  }
  button {
    margin-top: 2.5rem;
  }
`
