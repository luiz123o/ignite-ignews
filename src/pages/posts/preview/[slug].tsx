import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import * as S from '../styles.slug'
import { ParsedUrlQuery } from 'node:querystring'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from 'services/prismic'
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  const [session] = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])
  return (
    <>
      <Head>
        <title>{post.title}| Ignews</title>
      </Head>
      {session?.activeSubscription !== 'active' ? (
        <S.Container>
          <S.Post>
            <h1>{post.title}</h1>
            <time>{post.updatedAt}</time>
            <S.PreviewContent
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <S.ContinueReading className="continueReading">
              Wanna continue reading?
              <Link href="/">
                <a>Subscribe now 🤗</a>
              </Link>
            </S.ContinueReading>
          </S.Post>
        </S.Container>
      ) : (
        <S.Container>
          <S.Post>
            <h1>{post.title}</h1>
            <time>{post.updatedAt}</time>
            <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          </S.Post>
        </S.Container>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

interface Params extends ParsedUrlQuery {
  slug: string | string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params
  const prismic = getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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
    },
    redirect: 60 * 30
  }
}
