(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var user = this;

  user.firstname = "";
  user.lastname = "";
  user.email = "";
  user.phone = "";
  user.menunumber = "";

  user.save = function (userInfo) {
    user.firstname = userInfo.firstname;
    user.lastname = userInfo.lastname;
    user.email = userInfo.email;
    user.phone = userInfo.phone;
    user.menunumber = userInfo.menunumber;
    console.log(user);
  };

  user.getInfo = function () {
    var userInfo = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      menunumber: user.menunumber
    };
    return userInfo;
  };

}

})();
