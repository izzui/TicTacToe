var JogoDaVelhaController = (function () {
    function JogoDaVelhaController($scope, jogoDaVelha) {
        $scope.jogo = jogoDaVelha;
        $scope.jogada = function (x, y) {
            $scope.jogo.jogada(x, y);
        };
    }
    return JogoDaVelhaController;
})();
//@ sourceMappingURL=JogoDaVelhaController.js.map
