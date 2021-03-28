import * as S from './styles'
import { FaGithub } from 'react-icons/fa'
import { signIn, useSession, signOut } from 'next-auth/client'
import { FiX } from 'react-icons/fi'

export const SignInButton = () => {
  const [session] = useSession()
  const isUserLogged = session ? true : false
  return (
    <>
      <S.Container
        onClick={() => (isUserLogged === true ? signOut() : signIn('github'))}
      >
        <FaGithub color={`${isUserLogged ? '#04d361' : '#eba417'}`} />
        {isUserLogged ? session?.user.name : 'Sing in with GitHub'}
        {isUserLogged ? <FiX className="closeIcon" /> : ''}
      </S.Container>
    </>
  )
}
