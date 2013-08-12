class JogoDaVelha {
    tabuleiro: string[][];
    countJogadas: number;

    constructor() {
        this.novo();
    }

    novo() {
        this.tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
        this.countJogadas = 0;
    }

    terminou(): boolean {
        return this.resultado() != undefined;
    }

    jogada(x: number, y: number): boolean {
       
        if (this.posicaoVazia(x,y, this.tabuleiro) && !this.terminou()) {
            var arrOpcoes: string[] = ['X', 'O'];
            this.tabuleiro[x][y] = arrOpcoes[this.countJogadas % 2];
            this.countJogadas++;
            return true;
        }
        return false;
    }

    posicaoVazia(x: number, y: number, tabuleiro: string[][]): boolean {
        return tabuleiro[x][y] == '';
    }

    resultado(): string {
        var gabaritos: number[][][] = [
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
    }

    capturaValores(tabuleiro: string[][], gabarito: number[][]): string[] {
        var saco = {};
        for (var i = 0; i < gabarito.length; i++) {
            var posicao = gabarito[i];
            var x = posicao[0], y = posicao[1];
            saco[tabuleiro[x][y]] = true;
        }
        return (Object.keys(saco));
    }
}