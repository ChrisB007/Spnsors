import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import PatreonProvider from 'next-auth/providers/patreon';

export default NextAuth({
  pages: {
    // override signIn page so we can integrate with Magic
    signIn: '/signin',
  },
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    PatreonProvider({
      clientId: process.env.PATREON_ID,
      clientSecret: process.env.PATREON_SECRET,
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
  ],
});
