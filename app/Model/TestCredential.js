'use strict'

const Lucid = use("Lucid")

class TestCredential extends Lucid {
    static get primaryKey() {
        return 'user_id'
    }
    
    static get table() {
        return 'test_credentials'
    }
    
    user() {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = TestCredential
