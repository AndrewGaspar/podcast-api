'use strict'

const Lucid = use("Lucid")

class User extends Lucid {
    // only valid for MSA users
    msa_token() {
        return this.hasOne('App/Model/MsaToken')
    }
    
    // only valid for test users
    test_credential() {
        return this.hasOne('App/Model/TestCredential')
    }
    
    subscriptions() {
        return this.hasMany('App/Model/Subscription')
    }
}

module.exports = User
