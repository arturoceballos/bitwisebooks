(function() {

    'use strict';

    var app = angular.module('BitwiseBooks', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('BitwiseBooks', {
            abstract: true,
            template: '<ui-view>'
        }).state('BitwiseBooks.home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'home/home.html'
        }).state('BitwiseBooks.books', {
            url: '/books',
            controller: 'BooksController',
            controllerAs: 'books',
            templateUrl: 'books/books.html',
            resolve: {
                books: function (BooksService){
                    return BooksService.getBooks();
                },
                authors: function (AuthorsService){
                    return AuthorsService.getAuthors();
                }
            }
        }).state('BitwiseBooks.books.single', {
            url: '/:bookId',
            controller: 'BookController',
            controllerAs: 'book',
            templateUrl: 'books/book.html',
            resolve: {
                book: function (BooksService, $stateParams, books){
                    return BooksService.find($stateParams.bookId);
                }
            }
        });

        $urlRouterProvider.otherwise('/');
    });
}());