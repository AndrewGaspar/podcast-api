'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Routes helps you in defining http endpoints/urls which will be used
| by outside world to interact with your application. Adonis has a
| lean and rich router to support various options out of the box.
|
*/
const Route = use('Route')

Route.group('auth', function() {
    Route.resource('/users', 'UserController')
    Route.resource('/subscriptions', 'SubscriptionController')
}).middlewares(['auth_reqeuest'])

Route.resource('/podcasts', 'PodcastController')
Route.get('/msa_redirect', 'MsaRedirectController.index')
