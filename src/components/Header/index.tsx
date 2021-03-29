//import { useState } from 'react'
import * as S from './styles'
import { SignInButton } from './SignInButton'
import { useState } from 'react'

export const Header = () => {
  const [ActiveHome, setActiveHome] = useState(false)
  const [ActivePosts, setActivePosts] = useState(false)

  function handleClickHome() {
    setActiveHome(true)
    setActivePosts(false)
  }
  function handleClickPost() {
    setActiveHome(false)
    setActivePosts(true)
  }

  return (
    <S.Container>
      <S.Content>
        <img src="/images/logo.svg" alt="logo" />
        <S.NavItems>
          <S.MenuLink isActive={ActiveHome} onClick={handleClickHome} href="/">
            Home
          </S.MenuLink>
          <S.MenuLink
            isActive={ActivePosts}
            onClick={handleClickPost}
            href="/posts"
          >
            Posts
          </S.MenuLink>
        </S.NavItems>
        <SignInButton />
      </S.Content>
    </S.Container>
  )
}
