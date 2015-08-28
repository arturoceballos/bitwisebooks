(function() {

    'use strict';

    var app = angular.module('BitwiseBooks', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('BitwiseBooks', {
            abstract: true,
            template: '<ui-view>',
            resolve: {
                bootstrap: function(BootstrapService){
                    return BootstrapService.bootstrap();
                }
            }
        }).state('BitwiseBooks.home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'home/home.html'
        }).state('BitwiseBooks.books', {
            url: '/books',
            controller: 'BooksController',
            templateUrl: 'books/books.html'
        }).state('BitwiseBooks.books.single', {
            url: '/:bookId',
            controller: 'BookController',
            templateUrl: 'books/book.html'
        });

        $urlRouterProvider.otherwise('/');
    });
}());