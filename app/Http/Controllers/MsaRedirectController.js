'use strict'

const passport = use('App/Http/Auth/Passport')

class MsaRedirectController {
  
    * index (request, response) {
        yield new Promise((resolve, reject) => {
            passport.authenticate('oauth2')(
                request.request, 
                response.response, 
                (err, result) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(err)
                    }
                })
        });
    }
}

module.exports = MsaRedirectController
