var app = angular.module("myApp", []);

app.controller("LunchCheckController", function ($scope) {
    $scope.dish = "";
    $scope.totalcount = 0;
    $scope.message = "";
    $scope.customStyle = {};

    $scope.display = function () {
        var value = counttotal($scope.dish);
        $scope.message = value;

    };

    function counttotal(string) {
        console.log(string[0]);

        var totalString = 1;
        for (var i = 0; i < string.length; i++) {
            if (string[i] == ",") {
                totalString += 1
            }

        }
        if (totalString <= 3) {
            $scope.customStyle.style = { "color": "green" };
            return "Enjoy!"
        }
        if (totalString > 3) {
            $scope.customStyle.style = { "color": "red" };
            return "Too Much!"
        }
    }

});