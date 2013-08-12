/// <reference path="JogoDaVelha.ts" />
/// <reference path="typings/angular/angular.d.ts" />

var app = angular.module("JogoDaVelhaApp", []);
app.factory("jogoDaVelha", () => { return new JogoDaVelha() });