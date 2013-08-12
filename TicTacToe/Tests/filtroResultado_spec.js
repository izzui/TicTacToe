/// <reference path="../Scripts/typings/angular/angular-mocks.d.ts" />
/// <reference path="../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
describe("JogoDaVelhaController", function () {
    beforeEach(module("JogoDaVelhaApp"));

    it("filtroResultado", inject(function (filtroResultadoFilter) {
        expect(filtroResultadoFilter("X")).toBe("X venceu!");
        expect(filtroResultadoFilter("Velha")).toBe("Deu velha!");
    }));
});
//# sourceMappingURL=filtroResultado_spec.js.map
