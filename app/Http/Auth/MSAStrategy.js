'use strict'

const Env = use('Env')
const OAuth2Strategy = use('passport-oauth2').Strategy;
const co = use('co')

class MSAStrategy extends OAuth2Strategy {
    constructor(callbackURL, scopes, verify) {
        super({
            authorizationURL: 'https://login.live.com/oauth20_authorize.srf',
            tokenURL: 'https://login.live.com/oauth20_token.srf',
            clientID: Env.get('MSA_CLIENT_ID'),
            clientSecret: Env.get('MSA_CLIENT_SECRET'),
            callbackURL: callbackURL
        }, MSAStrategy.prototype.verify);
        
        this.scopes = scopes || []
    }
    
    authorizationParams(options) {
        return { scope: this.scopes.join(" ")}
    }
    
    userProfile(accessToken, done) {
        co(function*() {
            try {
                done(null, {})
            } catch(err) {
                done(err);
            }
        })
    }
    
    verify(accessToken, refreshToken, params, profile, done) {
        let user;
        if(profile) {
            user = profile;
        } else {
            user = {}
        }
        
        return done(null, { accessToken, refreshToken, profile, message: 'not implemented'})
    }
}

module.exports = MSAStrategy