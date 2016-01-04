'use strict'

class Auth {

  *handle (request, response, next) {
    // yield next once middleware expectation
    // have been satisfied
    
    
    yield next
  }

}

module.exports = Auth
