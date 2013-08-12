/// <reference path="app.ts" />

app.directive("tabuleiro", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div><div ng-transclude></div>' +
                    '<table><tr ng-repeat="x in model">' +
                    '<td ng-repeat="y in x" ' +
                    'ng-click="click({ x: $parent.$index, y: $index})">' +
                    '{{y}}</td></tr></table></div>',
        scope: {
            model: '=',
            click: '&'
        }
    }
});