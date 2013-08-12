/// <reference path="JogoDaVelha.ts" />
/// <reference path="typings/angular/angular.d.ts" />
var app = angular.module("JogoDaVelhaApp", []);
app.factory("jogoDaVelha", function () {
    return new JogoDaVelha();
});
//# sourceMappingURL=app.js.map
