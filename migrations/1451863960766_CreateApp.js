'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {
    up () {
        this.create('users', table => {
            table.increments()
            
            // identify what the underlying identification system is
            // accounts_types: ['msa', 'test']
            table.string('account_type')
            table.string('account_id')
            
            // Lucid timestamps
            table.timestamps()
            table.timestamp('deleted_at')
        })
        
        this.create('msa_tokens', table => {
            table.integer('user_id')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .primary();
                
            table.integer('expires_in').notNullable();
            table.string('access_token').notNullable();
            table.string('refresh_token').notNullable();
            
            // Lucid timestamps
            table.timestamps()
            table.timestamp('deleted_at')
        })
        
        this.create('test_credentials', table => {
            table.integer('user_id')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .primary();
                
            // yeah, yeah, don't store passwords in plain text in the DB
            // but this is just for local testing purposes. Only SSO via
            // MSA is supported in deployment
            table.string('password').notNullable();
            
            // Lucid timestamps
            table.timestamps()
            table.timestamp('deleted_at')
        })
        
        this.create('podcasts', table => {
            table.increments()
            table.string('href')
            table.timestamps()
            table.timestamp('deleted_at')
        })
    }

    down () {
        this.drop('users')
        this.drop('msa_tokens')
        this.drop('test_credentials')
        this.drop('podcasts')
    }
}

module.exports = NewSchema
