(function(){

    'use strict';

    var app = angular.module('BitwiseBooks');

    app.controller('BooksController', function(books){
        var vm = this;
        vm.books = books;
    })

}());