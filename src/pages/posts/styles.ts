import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.main)`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`
export const Content = styled(motion.div)`
  max-width: 720px;
  margin: 5rem auto 0;

  a {
    display: block;
    & + a {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid ${({ theme }) => theme.colors.detailsPost};
    }
    time {
      font-size: 1rem;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.detailLight};
    }
    strong {
      display: block;
      font-size: 1.5rem;
      margin-top: 1rem;
      line-height: 2rem;
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
    p {
      color: ${({ theme }) => theme.colors.detailLight};
      margin-top: 0.5rem;
      line-height: 1.625rem;
    }
  }
`
