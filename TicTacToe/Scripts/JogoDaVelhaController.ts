class JogoDaVelhaController {
    constructor($scope, jogoDaVelha) {
        $scope.jogo = jogoDaVelha;
        $scope.jogada = (x, y) => {
            $scope.jogo.jogada(x, y);
        }
    }
}