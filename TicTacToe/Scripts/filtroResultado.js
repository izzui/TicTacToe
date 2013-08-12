/// <reference path="../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
app.filter("filtroResultado", function () {
    return function (input) {
        switch (input) {
            case "X":
            case "O":
                return input + " venceu!";
            case "Velha":
                return "Deu velha!";
        }
    };
});
//# sourceMappingURL=filtroResultado.js.map
