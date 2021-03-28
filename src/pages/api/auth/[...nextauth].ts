import { query as q } from 'faunadb'
import NextAuth from 'next-auth'

import Providers from 'next-auth/providers'
import { fauna } from '../../../services/faunadb'
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID
        ? process.env.GITHUB_CLIENT_ID
        : '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET
        ? process.env.GITHUB_CLIENT_SECRET
        : '',
      scope: 'read:user'
    })
  ],

  callbacks: {
    async signIn(user) {
      const { email } = user
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email ? user.email : '')
                )
              )
            ),
            q.Create(q.Collection('users'), { data: { email } }),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email ? user.email : '')
              )
            )
          )
        )

        return true
      } catch (error) {
        return false
      }
    }
  }
})
