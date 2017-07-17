(function() {
  'use strict';
  angular.module('plunker')
    .controller('UserListController', UserListController);

  UserListController.$inject = ['userService'];

  function UserListController(userService) {
    var userListVm = this;

    userService.get()
    .then(function(users){
      userListVm.users = users;
    }, function (error){
      console.log(error);
    });
  }

})();