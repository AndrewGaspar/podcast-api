'use strict'

const passport = use('passport')
const MSAStrategy = use('App/Http/Auth/MSAStrategy')
const TestStrategy = use('App/Http/Auth/TestStrategy')

passport.use(new TestStrategy());
passport.use(new MSAStrategy("/msa_redirect", ["wl.signin", "wl.basic", "wl.offline_access"]))

module.exports = passport