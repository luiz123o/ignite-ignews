import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
import * as S from './styles'
type SubscribeButtonProps = {
  priceId: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession()
  const router = useRouter()
  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }
    if (session.activeSubscription) {
      router.push('/posts')
      return
    }
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <>
      <S.Container onClick={handleSubscribe}>Subscribe now</S.Container>
    </>
  )
}
