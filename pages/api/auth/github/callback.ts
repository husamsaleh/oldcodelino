import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('github', function (err, user) {
    if (err) return res.redirect('/login');
    req.logIn(user, function (err) {
      if (err) return res.redirect('/login');
      return res.redirect('/dashboard');
    });
  })(req, res);
}
