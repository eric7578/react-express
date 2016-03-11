import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export function initialize (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    //local strategy
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, async function (username, password, done) {
        if (username === 'admin' && password === 'password') {
            done(null, { username, loginTime: new Date() });
        } else {
            done(new Error('Invalid username/password'));
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}

export function loginRedirect () {
    return (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard');
        } else {
            next();
        }
    }
}

export function loginCheck () {
    return (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }
}

export default function () {
    const router = express.Router();

    router.get('/logout', (req, res) => {
        req.logOut();
        res.redirect('/')
    });

    router.post('/login', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }), (req, res) => {
        req.logIn();
    });

    return router;
};
