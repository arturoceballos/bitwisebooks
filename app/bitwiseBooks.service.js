(function(){

    'use strict';

    var app = angular.module('BitwiseBooks');

    app.service('BootstrapService', function($http, BooksService){

        function bootstrap(){
            return $http.get('../books.json').then(function(res){
                var data = res.data;
                BooksService.bootstrap(data);
            });
        }
        return {
            bootstrap: bootstrap
        }

    });
}());