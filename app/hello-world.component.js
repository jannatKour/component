(function(){
  'use strict';
  
    angular
    .module('myApp')
    .component('helloWorld', {
    templateUrl: 'app/hello-world.component.html',
    controllerAs: 'model',
    controller: ['$http', Controller]
  });

  function fetchMovies($http){
    return $http.get('/movies.json')
      .then(function(response){
      return response.data;
    });
  }

  function Controller($http){
    var model = this;
    model.movies = [];
    model.$onInit = function(){
      fetchMovies($http).then(function(movies){
        model.movies = movies;
      });
    };

    model.upRating = function(movie){
      if(movie.rating < 5){
        movie.rating += 1;
      }
    };

    model.downRating = function(movie){
      if(movie.rating > 1){
        movie.rating -= 1;
      }
    };
  }
})();
