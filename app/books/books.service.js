(function(){

    'use strict';

    var app = angular.module('BitwiseBooks');

    app.service('BooksService', function($http, Book){

        var vm = this;
        vm.books = [];

       vm.makeBooks = function makeBooks(data){
           data.forEach(function(book){
               vm.books.push(new Book(book));
           });
           return vm.books;
       };

        vm.getBooks = function getBooks() {
            return $http.get('../../books.json').then(function(res) {
                return vm.makeBooks(res.data);
            }, function(err){
                return "Sorry, there was an error.";
            });
        };

        vm.find = function find(book_id){
            return _.find(vm.books, {_id: book_id});
        }

    });

}());