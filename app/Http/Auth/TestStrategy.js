'use strict'

const passport = use('passport')
const BasicStrategy = use('passport-http').BasicStrategy
const co = use('co')
const User = use('App/Model/User')

class TestStrategy extends BasicStrategy {
    constructor() { super(TestStrategy.prototype.verify) }
    
    verify(username, password, done)
    {
        co(function*() {
            try {
                const usersQuery = yield User.where({ 
                                 account_type: 'test',
                                 account_id: username 
                             }).with('test_credential').first().fetch();
                             
                const user = usersQuery.toJSON()
                
                if(Object.keys(user).length == 0) {
                    return done(null, false, { message: "No such user" })
                }
                        
                if(user.test_credential.password !== password) {
                    return done(null, false, { message: "Incorrect password" })
                }
                
                return done(null, user)
            } catch (err) {
                return done(err);
            }
        })
    }
}

module.exports = TestStrategy