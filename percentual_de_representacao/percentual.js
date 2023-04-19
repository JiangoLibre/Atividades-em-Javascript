const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoMensal).reduce(
    (total, valor) => total + valor
  );
  
  const percentuais = {};
  for (const estado in faturamentoMensal) {
    const percentual = (faturamentoMensal[estado] / totalFaturamento) * 100;
    percentuais[estado] = percentual.toFixed(2);
  }
  
  console.log(percentuais);
  