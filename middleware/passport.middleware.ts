import passportGoogle from "passport-google-oauth20";
import passport from "passport";
import dotenv from 'dotenv';

dotenv.config();

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: process.env.GOOGLE_CALLBACK_URL!,
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {
            done(null, profile);
        }
    )
);

passport.serializeUser(function (user: any, done) {
    done(null, user);
});

passport.deserializeUser(function (user: any, done) {
    done(null, user);
});