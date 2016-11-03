(function() {
'use strict'

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var reg = this;

  reg.formStatus = "";
  reg.user = UserService.getInfo;

  reg.submit = function () {
    console.log("firstname is " + reg.user.firstname+" - favorite short name: " + reg.user.menunumber);
      MenuService.getMenuItem(reg.user.menunumber)
      .then(function(response) {
          console.log(response);
          reg.user.menuname = response.name;
          reg.user.menudescription = response.description;
          reg.user.menuimage = response.image_present;
          reg.formStatus = "saved";
          UserService.save(reg.user);
      }).catch(function(error) {
          reg.formStatus = "error";
      });
  }
}

})();
