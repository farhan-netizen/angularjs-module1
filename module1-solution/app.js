var app = angular.module("myApp", []);

app.controller("LunchCheckController", function ($scope) {
    $scope.dish = "";
    $scope.message = "";
    $scope.customStyle = {};

    $scope.display = function () {
        var value = counttotal($scope.dish);
        $scope.message = value;

    };

    function counttotal(string) {

        var totalString = 0;
        for (var i = 0; i < string.length; i++) {
            if (string[i] == ",") {
                totalString += 1
            }

        }
        if (totalString == 0) {
            $scope.customStyle.style = { "color": "red" };
            return "Please enter data first!"
        }
        if ((totalString >= 1) && (totalString < 3)) {
            $scope.customStyle.style = { "color": "green" };
            return "Enjoy!"
        }
        if (totalString > 2) {
            $scope.customStyle.style = { "color": "red" };
            return "Too Much!"
        }
    }

});