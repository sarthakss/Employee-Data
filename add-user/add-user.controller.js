/*(function() {
  'use strict';
  angular.module('plunker')
    .controller('AddUserController', AddUserController);

  AddUserController.$inject = ['$scope','$http','$rootScope','userService'];

  function AddUserController($scope,$http,$rootScope,userService) {
    var userDetailVm = this;
    
  $scope.formService = userService.addUser($scope,$http);
  }

})();



*/