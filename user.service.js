(function() {
  'use strict';
  angular.module('plunker')
    .service('userService', userService);

  userService.$inject = ['$q', '$http'];

  function userService($q, $http) {
    var self = this;

    self.get = getUsers;
    self.getById = getUserById;
    self.delete = removeUserById;

    function getUsers() {
      return $http.get('http://mocker.egen.io/users')
        .then(successFn, errorFn);
    }

    function getUserById(id) {
      return $http.get('http://mocker.egen.io/users/' + id)
        .then(successFn, errorFn);
    }
    
    function removeUserById(id) {
     return $http.delete('http://mocker.egen.io/users/' + id)
        .then(successFn, errorFn);
      
      
    }
    
   /*  function addUser() {
       var json_data = JSON.stringify($scope.formData);
       var url='http://mocker.egen.io/users'
        $http.post(url, json_data, {
            withCredentials: true,
            headers: {'Content-Type': 'application/json'},
            transformRequest: angular.identity
        }).success(function(){
            console.log("done");
        }).error(function(){
            console.log("error");
        });
    }*/
      //return $http.post('http://mocker.egen.io/users/application/json')
       // .then(successFn, errorFn);
    

    function successFn(response) {
      return response.data;
    }

    function errorFn(error) {
      return $q.reject(error);
    }
  }
})();

