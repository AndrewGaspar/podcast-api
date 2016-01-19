'use strict'

const Lucid = use("Lucid")

class MsaToken extends Lucid {
    static get primaryKey() {
        return 'user_id'
    }
    
    static get table() {
        return 'msa_tokens'
    }
    
    user() {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = MsaToken
