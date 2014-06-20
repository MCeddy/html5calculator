var calculatorApp = angular.module('calculatorApp', []);

calculatorApp.controller('calculatorCtrl', function($scope) {
    var valueIndex = 0;
    var operation = undefined; //0 = +; 1 = -; 2 = *
    var values = ['', ''];

    $scope.setValue = function(value) {
        values[valueIndex] += value.toString();
    };

    $scope.getResult = function () {
        return values[valueIndex];
    };

    $scope.setOperation = function (value) {
        if (valueIndex === 0) {
            valueIndex = 1;
            operation = value;
            values[1] = '';
        }
        else {
            $scope.calculate();
            $scope.setOperation(value);
        }
    };

    $scope.calculate = function() {
        if (valueIndex === 1) {
            var int0 = parseInt(values[0], 10);
            var int1 = parseInt(values[1], 10);
            var result = undefined;

            switch (operation) {
                case 0:
                    result = int0 + int1;
                    break;
                case 1:
                    result = int0 - int1;
                    break;
                case 2:
                    result = int0 * int1;
                    break;
            }

            if (result) {
                values[0] = result;
                valueIndex = 0;
                operation = undefined;
            }
        }
    };

    $scope.clear = function() {
        valueIndex = 0;
        operation = undefined;
        values = ['', ''];
    };
});