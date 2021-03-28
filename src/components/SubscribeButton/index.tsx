import { signIn, useSession } from 'next-auth/client'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
import * as S from './styles'

export const SubscribeButton = () => {
  const [session] = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
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
