var JogoDaVelha = (function () {
    function JogoDaVelha() {
        this.novo();
    }
    JogoDaVelha.prototype.novo = function () {
        this.tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
        this.countJogadas = 0;
    };

    JogoDaVelha.prototype.terminou = function () {
        return this.resultado() != undefined;
    };

    JogoDaVelha.prototype.jogada = function (x, y) {
        if (this.posicaoVazia(x, y, this.tabuleiro) && !this.terminou()) {
            var arrOpcoes = ['X', 'O'];
            this.tabuleiro[x][y] = arrOpcoes[this.countJogadas % 2];
            this.countJogadas++;
            return true;
        }
        return false;
    };

    JogoDaVelha.prototype.posicaoVazia = function (x, y, tabuleiro) {
        return tabuleiro[x][y] == '';
    };

    JogoDaVelha.prototype.resultado = function () {
        var gabaritos = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (var i = 0; i < gabaritos.length; i++) {
            var gabarito = gabaritos[i];
            var valores = this.capturaValores(this.tabuleiro, gabarito);
            if ((valores.length == 1) && (valores[0] != '')) {
                return valores[0];
            }
        }
        if (this.countJogadas === 9)
            return "Velha";

        return undefined;
    };

    JogoDaVelha.prototype.capturaValores = function (tabuleiro, gabarito) {
        var saco = {};
        for (var i = 0; i < gabarito.length; i++) {
            var posicao = gabarito[i];
            var x = posicao[0], y = posicao[1];
            saco[tabuleiro[x][y]] = true;
        }
        return (Object.keys(saco));
    };
    return JogoDaVelha;
})();
