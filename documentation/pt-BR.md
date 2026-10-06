<!-- ELUCENIA technical documentation · ibutg · pt-BR · no clinical/professional/rights approval -->

# IBUTG e limite de exposição ao calor (NR-15)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/ibutg)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Local da atividade

`amb`

- `fechado` — Ambiente fechado ou com fonte artificial de calor
- `aberto` — Céu aberto, sem fonte artificial de calor

### Há carga solar direta no ponto de medição?

`solar`

- `0` — Não
- `1` — Sim

### Temperatura de bulbo úmido natural (tbn)

`tbn`

°C · intervalo: 0–45

### Temperatura de globo (tg)

`tg`

°C · intervalo: 0–90

### Temperatura de bulbo seco (tbs), só com carga solar

`tbs`

°C · opcional · intervalo: 0–60

### Taxa metabólica média da atividade (Quadro 2 da NR-15)

`m`

W · intervalo: 100–606

### Vestimenta

`roupa`

- `0` — Uniforme (calça e camisa de manga longa) ou macacão de tecido: +0
- `2` — Macacão de poliolefina: +2 °C
- `3` — Vestimenta ou macacão forrado (tecido duplo): +3 °C
- `4` — Avental longo de manga longa impermeável ao vapor: +4 °C
- `10` — Macacão impermeável ao vapor: +10 °C
- `12` — Macacão impermeável ao vapor sobre a roupa de trabalho: +12 °C
- `0.5` — Macacão de polipropileno SMS: +0,5 °C

### Vestimenta com capuz (+1 °C)

`capuz`

## Edição do método

NR 15 Anexo 3 Portaria 1359/2019 e NR 9 Anexo III:WBGTsem/comsol; ajustevestimenta; tabelametabólica

## Fórmula documentada

Sem carga solar: IBUTG = 0,7 tbn + 0,3 tg. Com carga solar: IBUTG = 0,7 tbn + 0,1 tbs + 0,2 tg (NHO 06 da Fundacentro).

Ao IBUTG soma-se o ajuste da vestimenta (Quadro 4 do Anexo 3 da NR-9; capuz +1 °C). O resultado é comparado com o IBUTG máximo do Quadro 1 do Anexo 3 da NR-15 (limite de exposição) e com o Quadro 1 do Anexo 3 da NR-9 (nível de ação), na linha da maior taxa metabólica tabelada que não ultrapassa a informada.

## Limites e população

O limite de insalubridade da NR-15 Anexo 3 refere-se a ambientes fechados ou com fonte artificial de calor; esse anexo exclui trabalho a céu aberto sem fonte artificial. A avaliação exige procedimentos NHO 06 e médias representativas dos 60 minutos consecutivos de exposição mais crítica. O cálculo isolado não caracteriza insalubridade sem avaliação e laudo previstos na norma. Os requisitos preventivos da NR-9 têm escopo próprio e não devem ser confundidos com essa exclusão.

## Referências

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Acima do limite de exposição: atividade insalubre em grau médio (NR-15, Anexo 3) e medidas corretivas obrigatórias (NR-9)

| Detalhes do resultado | |
| --- | --- |
| IBUTG calculado (sem ajuste de vestimenta) | 29,5 °C |
| Limite de exposição para 300 W (IBUTG máx.) | 28,2 °C |
| Nível de ação para 300 W | 25,0 °C |

A avaliação legal exige o IBUTG médio e a taxa metabólica média da pior janela de 60 minutos corridos, medidos conforme a NHO 06 da Fundacentro.


### 2

Abaixo do nível de ação para esta taxa metabólica

| Detalhes do resultado | |
| --- | --- |
| IBUTG calculado (sem ajuste de vestimenta) | 24,4 °C |
| Limite de exposição para 200 W (IBUTG máx.) | 30,3 °C |
| Nível de ação para 200 W | 27,5 °C |

A avaliação legal exige o IBUTG médio e a taxa metabólica média da pior janela de 60 minutos corridos, medidos conforme a NHO 06 da Fundacentro.


### 3

Acima do nível de ação e abaixo do limite: medidas preventivas (água fresca, trabalho pesado nos horários mais amenos, aclimatização)

| Detalhes do resultado | |
| --- | --- |
| IBUTG calculado (sem ajuste de vestimenta) | 27,1 °C |
| Limite de exposição para 250 W (IBUTG máx.) | 29,2 °C |
| Nível de ação para 250 W | 26,1 °C |

A avaliação legal exige o IBUTG médio e a taxa metabólica média da pior janela de 60 minutos corridos, medidos conforme a NHO 06 da Fundacentro.


### 4

Acima do limite de exposição ocupacional: medidas corretivas obrigatórias (NR-9). A insalubridade do Anexo 3 da NR-15 não se aplica a atividades a céu aberto sem fonte artificial de calor

| Detalhes do resultado | |
| --- | --- |
| IBUTG calculado (sem ajuste de vestimenta) | 29,7 °C |
| Limite de exposição para 360 W (IBUTG máx.) | 27,3 °C |
| Nível de ação para 360 W | 23,9 °C |

A avaliação legal exige o IBUTG médio e a taxa metabólica média da pior janela de 60 minutos corridos, medidos conforme a NHO 06 da Fundacentro.


### 5

Acima do limite de exposição: atividade insalubre em grau médio (NR-15, Anexo 3) e medidas corretivas obrigatórias (NR-9)

| Detalhes do resultado | |
| --- | --- |
| IBUTG calculado (sem ajuste de vestimenta) | 24,4 °C |
| Ajuste de vestimenta | +10,0 °C |
| Limite de exposição para 200 W (IBUTG máx.) | 30,3 °C |
| Nível de ação para 200 W | 27,5 °C |

A avaliação legal exige o IBUTG médio e a taxa metabólica média da pior janela de 60 minutos corridos, medidos conforme a NHO 06 da Fundacentro.

