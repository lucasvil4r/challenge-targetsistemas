function calcularFaturamento(vetorFaturamento) {
    // Filtra os dias com faturamento
    const faturamentoDias = vetorFaturamento.filter(valor => valor > 0);
    
    if (faturamentoDias.length === 0) {
        return {
            menorValor: 0,
            maiorValor: 0,
            diasAcimaMedia: 0
        };
    }

    // Calcula o menor e o maior valor de faturamento
    const menorValor = Math.min(...faturamentoDias);
    const maiorValor = Math.max(...faturamentoDias);

    // Calcula a média anual
    const somaFaturamento = faturamentoDias.reduce((acc, valor) => acc + valor, 0);
    const mediaAnual = somaFaturamento / faturamentoDias.length;

    // Conta o número de dias com faturamento acima da média anual
    const diasAcimaMedia = faturamentoDias.filter(valor => valor > mediaAnual).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaMedia
    };
}

// Exemplo de vetor de faturamento diário para um ano
const vetorFaturamento = [0, 150, 200, 0, 180, 220, 0, 170, 0, 210, 250, 0, 0, 160, 190, 0];

const resultado = calcularFaturamento(vetorFaturamento);

console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Número de dias acima da média anual:", resultado.diasAcimaMedia);
