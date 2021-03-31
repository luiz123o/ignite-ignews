import { linearGradient } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`
export const Post = styled.article`
  max-width: 720px;
  margin: 5rem auto 0;
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }
  time {
    display: block;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.detailLight};
    margin-top: 1.5rem;
  }
`
export const PostContent = styled.div`
  margin-top: 2rem;
  line-height: 1.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};

  p,
  ul {
    margin: 1.5rem 0;
  }
  ul {
    padding-left: 1.5rem;
    li {
      margin: 0.5rem 0;
    }
  }
`
export const PreviewContent = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.text}, transparent);
    background-clip: text;
    color: ${theme.colors.text};
  `}
`
export const ContinueReading = styled.div`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.detail};
  border-radius: 100px;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 4rem 0 2rem;
  a {
    color: ${({ theme }) => theme.colors.yellow};
    margin-left: 0.5rem;
  }
`
