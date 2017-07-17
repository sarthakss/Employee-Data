(function() {
  'use strict';
  angular.module('plunker')
    .controller('RemoveUserController', RemoveUserController);

  RemoveUserController.$inject = ['userService', '$routeParams'];

  function RemoveUserController(userService, $routeParams) {
    var removeUserVm = this;
    
    userService.delete($routeParams.id)
     .then(function (user){
      removeUserVm.user = user;
    }, function (error){
      console.log(error);
    });
    
    
   }
})();