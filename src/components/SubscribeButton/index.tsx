import * as S from './styles'

interface SubscribeButtonProps {
  priceId: string
}
export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <>
      <S.Container>Subscribe now</S.Container>
    </>
  )
}
