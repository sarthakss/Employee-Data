(function() {
  'use strict';
  angular.module('plunker', ['ngRoute']);


  angular.module('plunker')
    .config(moduleConfig);

  moduleConfig.$inject = ['$routeProvider'];

  function moduleConfig($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'user-list/user-list.tmpl.html',
        controller: 'UserListController',
        controllerAs: 'userListVm'
      })
      .when('/users/:id', {
        templateUrl: 'user-detail/user-detail.tmpl.html',
        controller: 'UserDetailController',
        controllerAs: 'userDetailVm'
      })
      // .when('/add-user', {
      //   templateUrl: 'add-user/add-user.tmpl.html'
      // })
      .when('/users/remove/:id', {
        templateUrl: 'remove-user/remove-user.tmpl.html',
      //  templateUrl: 'user-list/user-list.tmpl.html',
        controller: 'RemoveUserController',
        controllerAs:'removeUserVm'
      })
      .otherwise({
        redirectTo: '/users'
      });
  }
})();