let quantidadeDeVitorias = 12;
let quantidadeDeDerrotas = 2;
let saldoRankeadas = quantidadeDeVitorias - quantidadeDeDerrotas;
let nivelHeroi = "";

function calcularNivel(saldo) {
    switch (true) {
        case saldo <= 10:
            return "Ferro";

        case saldo <= 20:
            return "Bronze";

        case saldo <= 50:
            return "Prata";

        case saldo <= 80:
            return "Ouro";

        case saldo <= 90:
            return "Diamante";

        case saldo <= 100:
            return "Lendário";

        default:
            return "Imortal";
    }
}

nivelHeroi = calcularNivel(saldoRankeadas);

console.log("O Herói tem saldo de " + saldoRankeadas + " e está no nível de: " + nivelHeroi);