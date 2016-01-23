'use strict'

const Ansi = use("Ansi")
const User = use("App/Model/User")

class DatabaseSeed {

  static get description () {
    return 'Seeds the database'
  }

  static get signature () {
    return '{username} {password}'
  }

  * handle (options, flags) {
    const user = new User({ 
        account_type: 'test',
        account_id: options.username 
    });
                    
    yield user.create();
    yield user.test_credential().create({ password: options.password })
    
    Ansi.success("Seeded database with user")
  }

}

module.exports = DatabaseSeed
