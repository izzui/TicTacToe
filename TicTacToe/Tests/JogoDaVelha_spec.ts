/// <reference path="../Scripts/JogoDaVelha.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />

describe("JogoDaVelha", () => {

    var jogo;

    beforeEach(() => {
        jogo = new JogoDaVelha();
    });

    it("nao deve ter terminado em um novo jogo", () => {
        expect(jogo.terminou()).toBe(false);
    });

    it("X venceu", () => {
        jogo.jogada(0, 0);
        jogo.jogada(1, 0);
        jogo.jogada(0, 1);
        jogo.jogada(2, 0);
        jogo.jogada(0, 2);

        expect(jogo.terminou()).toBe(true);
        expect(jogo.resultado()).toBe("X");
    });

    it("O venceu", () => {
        jogo.jogada(2, 2);
        jogo.jogada(1, 0);
        jogo.jogada(0, 1);
        jogo.jogada(2, 0);
        jogo.jogada(1, 2);
        jogo.jogada(0, 0);

        expect(jogo.terminou()).toBe(true);
        expect(jogo.resultado()).toBe("O");
    });

    it("Deu Velha", () => {
        jogo.jogada(0, 0);
        jogo.jogada(0, 1);
        jogo.jogada(0, 2);
        jogo.jogada(1, 0);
        jogo.jogada(1, 2);
        jogo.jogada(1, 1);
        jogo.jogada(2, 0);
        jogo.jogada(2, 2);
        jogo.jogada(2, 1);

        expect(jogo.terminou()).toBe(true);
        expect(jogo.resultado()).toBe("Velha");
    });

    it("Jogo nao terminado", () => {
        jogo.jogada(0, 0);
        jogo.jogada(0, 1);
        jogo.jogada(0, 2);
        jogo.jogada(1, 0);
        jogo.jogada(1, 2);
        jogo.jogada(1, 1);
        jogo.jogada(2, 0);
        jogo.jogada(2, 2);

        expect(jogo.terminou()).toBe(false);
        expect(jogo.resultado()).toBe(undefined);
    });

    it("Nao deve permitir jogada no mesmo local", () => {
        expect(jogo.jogada(0, 0)).toBe(true);
        expect(jogo.countJogadas).toBe(1);
        expect(jogo.jogada(0, 0)).toBe(false);
        expect(jogo.countJogadas).toBe(1);
    });

    it("Nao deve permitir jogada depois que terminou", () => {
        jogo.jogada(2, 2);
        jogo.jogada(1, 0);
        jogo.jogada(0, 1);
        jogo.jogada(2, 0);
        jogo.jogada(1, 2);
        jogo.jogada(0, 0);

        expect(jogo.terminou()).toBe(true);

        var count = jogo.countJogadas;
        expect(jogo.jogada(1, 1)).toBe(false);
        expect(jogo.countJogadas).toBe(count);
    });

});