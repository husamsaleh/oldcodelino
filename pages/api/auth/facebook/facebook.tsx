import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/facebook/callback`,
      profileFields: ['id', 'email', 'name'],
    },
    function (_accessToken, _refreshToken, profile, done) {
      // You can save the user's profile data to your database here
      return done(null, profile);
    }
  )
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('facebook')(req, res);
}
