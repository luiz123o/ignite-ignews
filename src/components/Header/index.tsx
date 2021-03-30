import * as S from './styles'

import { SignInButton } from './SignInButton'
import { useState } from 'react'
import { ActiveLink } from './ActiveLink/index'

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
    <>
      <S.Container>
        <S.Content>
          <img src="/images/logo.svg" alt="logo" />
          <S.NavItems>
            <ActiveLink href="/" isActive={ActiveHome}>
              <S.MenuLink activeStats onClick={handleClickHome}>
                Home
              </S.MenuLink>
            </ActiveLink>
            <ActiveLink href="/posts" isActive={ActivePosts}>
              <S.MenuLink activeStats onClick={handleClickPost}>
                Posts
              </S.MenuLink>
            </ActiveLink>
          </S.NavItems>
          <SignInButton />
        </S.Content>
      </S.Container>
    </>
  )
}
