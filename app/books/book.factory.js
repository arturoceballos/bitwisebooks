(function(){

    'use strict';

    angular.module('BitwiseBooks')
        .factory('Book', function($injector){
            function Book(data){
                _.merge(
                    this,
                    {},
                    data
                )
            }
            Book.prototype = {
                inStock: function inStock(){
                    if(this.isInStock){
                        return 'In Stock';
                    } else {
                        return "Out of Stock";
                    }
                },
                findAuthor: function findAuthor(){
                    var service = $injector.get('AuthorsService'),
                        author = service.find(this.authorID);
                    return author.name;
                }
            };
            return Book;
        })

}());