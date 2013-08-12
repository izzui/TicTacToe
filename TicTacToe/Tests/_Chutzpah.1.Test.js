describe("JogoDaVelha", function () {
    it("nao deve ter terminado em um novo jogo", function () {
        var jogo = new JogoDaVelha();
        expect(jogo.terminou()).toBe(false);
    });

    it("x venceu", function () {
        var jogo = new JogoDaVelha();

        jogo.jogada(0, 0);
        jogo.jogada(1, 0);
        jogo.jogada(0, 1);
        jogo.jogada(2, 0);
        jogo.jogada(0, 2);

        expect(jogo.terminou()).toBe(true);
    });
});
