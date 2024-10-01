let app = angular.module("module",[]);

app.controller("myController",function($scope){
    $scope.number = 0;

    $scope.myFunction = function(){
        $scope.number++;
    };
});