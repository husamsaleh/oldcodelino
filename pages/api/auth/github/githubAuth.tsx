import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/github/callback`,
    },
    function (_accessToken, _refreshToken, profile, done) {
      // You can save the user's profile data to your database here
      return done(null, profile);
    }
  )
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('github')(req, res);
}
