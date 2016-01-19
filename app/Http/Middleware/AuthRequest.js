'use strict'

const passport = use('App/Http/Auth/Passport')
const connect_it = use('connect-to-adonis')

module.exports = connect_it(passport.authenticate(['basic', 'oauth2'], { session: false }))
