var app = angular.module("myApp", []);

app.controller('myControl', function ($scope, $http) {

    $http.get("https://script.google.com/macros/s/AKfycbweNpragezIxPc4XttO5XR--ZLQR_AieofQd0KFXkWkl33MPQypf38oEGMv_opw5ZgBzA/exec")
        .then(function (response) {
            $scope.allData = response.data;
        })

    $scope.currentScreen = "home";
    $scope.setScreen = function (name) {
        $scope.currentScreen = name;
    }
    $scope.setSem = function (no) {
        $scope.currentSem = no;
    }

})