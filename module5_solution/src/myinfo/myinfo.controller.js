(function() {
'use strict'

angular.module('common')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject=['UserService'];
function MyInfoController(UserService) {
  var user = this;
  var userInfo = UserService.getInfo();
  user.firstname = userInfo.firstname;
  user.lastname = userInfo.lastname;
  user.email = userInfo.email;
  user.phone = userInfo.phone;
  user.menunumber = userInfo.menunumber;
  user.menuname = userInfo.menuname;
  user.menudescription = userInfo.menudescription;
  user.menuimage = userInfo.menuimage;  
}
})();
