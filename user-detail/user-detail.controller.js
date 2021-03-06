(function() {
  'use strict';
  angular.module('plunker')
    .controller('UserDetailController', UserDetailController);

  UserDetailController.$inject = ['userService', '$routeParams'];

  function UserDetailController(userService, $routeParams) {
    var userDetailVm = this;
    
    userService.getById($routeParams.id)
    .then(function (user){
      userDetailVm.user = user;
    }, function (error){
      console.log(error);
    });
  }

})();