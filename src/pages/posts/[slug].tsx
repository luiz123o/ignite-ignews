import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import * as S from './styles.slug'
import { ParsedUrlQuery } from 'node:querystring'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from 'services/prismic'
import Head from 'next/head'

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}| Ignews</title>
      </Head>
      <S.Container>
        <S.Post>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </S.Post>
      </S.Container>
    </>
  )
}
interface Params extends ParsedUrlQuery {
  slug: string | string[]
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const session = await getSession({ req })

  if (session !== null && session.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { slug } = params as Params
  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(
      response.last_publication_date ?? ''
    ).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post
    }
  }
}
