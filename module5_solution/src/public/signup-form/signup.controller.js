(function() {
'use strict'

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuCategories', 'MenuService', 'UserService'];
function SignUpController(menuCategories, MenuService, UserService) {
  var reg=this;

  reg.menuCategories = menuCategories;

  reg.user = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    menunumber:''
  };

  reg.submit = function () {
    console.log("firstname is " + reg.user.firstname+" - favorite short name: " + reg.user.menunumber);
      MenuService.getMenuItems(reg.user.menunumber || "")
      .then(function(response) { console.log(response);
          UserService.save(reg.user);
          return UserService.getInfo();
      }).catch(function(error) {
          console.log("No such menu number exists: " + reg.user.menunumber);
          return error;
      });
  }
}

})();
