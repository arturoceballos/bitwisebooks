(function(){

    'use strict';

    var app = angular.module('BitwiseBooks');

    app.controller('BookController', function(book){
        var vm = this;
        vm.book = book;
    });

}());