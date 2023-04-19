# Análise de Faturamento Diário
Este código em JavaScript lê um arquivo JSON que contém informações de faturamento diário e realiza algumas análises sobre esses dados. O objetivo é encontrar o menor valor, o maior valor e o número de dias em que o valor de faturamento diário foi superior à média mensal.

## JSON
Para utilizar esse código, é necessário ter o Node.js instalado na sua máquina. Além disso o arquivo JSON contém um array com informações sobre o faturamento diário. Cada objeto dentro do array contém informações sobre um determinado dia, incluindo a data e o valor do faturamento.

## Como executar o script
1. Faça o download do arquivo 'faturamento.json' e coloque-o na mesma pasta do script 'faturamento.js'.
2. Abra um terminal ou prompt de comando.
3. Navegue até a pasta onde o script 'faturamento.js' e o arquivo 'faturamento.json' estão localizados.
4. Digite o seguinte comando: node faturamento.js
5. Pressione Enter para executar o script.

## Saída
Ao executar o script, as seguintes informações serão exibidas no console:

O menor valor de faturamento diário: R$[valor];<br/>
O maior valor de faturamento diário: R$[valor];<br/>
O número de dias com faturamento diário acima da média mensal: [número].

## Notas adicionais
* O script utiliza o módulo Node.js 'fs' para ler o arquivo JSON.<br/>
* A média mensal é calculada como o total de faturamento dividido pelo número de dias do mês.<br/>
* Os valores de faturamento são considerados apenas se forem maiores que zero.<br/>
* O script assume que o arquivo 'faturamento.json' está formatado corretamente e que contém uma chave 'faturamento_diario' com um array de objetos que contêm chaves 'dia' e 'valor'.
