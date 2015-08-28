(function(){

    'use strict';

    var app = angular.module('BitwiseBooks');

    app.controller('BooksController', function($scope, BooksService){
        $scope.books = BooksService.books;
    })

}());