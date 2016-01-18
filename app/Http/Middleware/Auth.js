'use strict'

const passport = use('passport');
const LocalStrategy = use('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username == "local_user") {
            if(password == "password") {
                return done(null, { username: "local_user", password: "password" });
            } else {
                return done(null, false, { message: "Incorrect password" });
            }
        } else {
            return done(null, false, { message: "Unknown user." });
        }
    }
));

class Auth {

  *handle (request, response, next) {
    // yield next once middleware expectation
    // have been satisfied
    yield new Promise((resolve, reject) => {
        passport.authenticate('local', { session: false })(request.request, response.response, function(err, result) {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    
    yield next;
  }

}

module.exports = Auth
