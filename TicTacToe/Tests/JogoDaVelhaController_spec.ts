/// <reference path="../Scripts/typings/sinon/sinon-1.5.d.ts" />
/// <reference path="../Scripts/typings/angular/angular-mocks.d.ts" />
/// <reference path="../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../Scripts/JogoDaVelhaController.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />

describe("JogoDaVelhaController", () => {

    var controller, jogo, scope;

    beforeEach(module("JogoDaVelhaApp"));

    beforeEach(inject(function ($rootScope, $controller) {
        jogo = sinon.stub({ jogada: (x, y) => {} });
        scope = $rootScope.$new();
        controller = $controller("JogoDaVelhaController",
            {$scope: scope, jogoDaVelha: jogo});
    }));

    it("o escopo jogo deve ser definido", function () {
        jogo.id = "jogoMock";
        expect(scope.jogo).toBe(jogo);
        expect(scope.jogo.id).toBe("jogoMock");
    });

    it("o metodo jogo.jogada eh chamado", function () {
        scope.jogada(1, 2);
        expect(jogo.jogada.calledWith(1,2)).toBe(true);
    });
});