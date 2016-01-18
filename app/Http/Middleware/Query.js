'use strict'

const qs = use('qs')

class Query {
  *handle (request, response, next) {
    let req = request.request;
    req.query = qs.parse(
        req.url.substring(req.url.indexOf('?') + 1));
    
    yield next;
  }
}

module.exports = Query