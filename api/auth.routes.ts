import express from 'express';
import passport from 'passport';

const auth = express.Router();

auth.get(
    '/auth/google/login',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })
);

auth.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure',
    }),
    function (req, res) {
      res.redirect("/home");
    }
);

auth.get('/auth/google/failure', (req, res) => {
    res.send('Something went wrong with Google authentication.');
});

export default auth;
