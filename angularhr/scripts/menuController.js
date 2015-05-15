/*
*
 * Created by Andrei on 5/12/2015.
angular.module("hrApp").controller('DescriptionController',function($scope){
    $scope.descriptionShow=true;

    $scope.toggleDescriptionShow=function toggleDescriptionShow(){
        console.log("buton apasat");
        if($scope.descriptionShow==true) {
            $scope.descriptionShow = false;
        }else {
            $scope.descriptionShow = true;
        }
    };
});*/

var hrApp = angular.module('hrApp');
hrApp.controller('menuController', ['$scope', function($scope) {
    $scope.employeeOptions = [
        {
            name: 'List employees'
        },
        {
            name: 'Add employee'
        }
    ];
}]);