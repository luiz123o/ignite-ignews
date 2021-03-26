import { SubscribeButton } from 'components/SubscribeButton'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from 'services/stripe'

import * as S from '../styles/pages/Home/styles'
interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <S.Container>
        <S.Content>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </S.Content>
        <img src="/images/avatar.svg" alt="Girls coding" />
      </S.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IYXXqGQtLhyoETfsUSrgj2O', {
    expand: ['product']
  })
  const product = {
    priceId: price.id,
    amount:
      price.unit_amount !== null
        ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(price.unit_amount / 100)
        : 0
  }
  return {
    props: { product },
    revalidate: 60 * 60 * 24 //24h
  }
}
