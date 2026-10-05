<!-- ELUCENIA technical documentation · ibutg · it · no clinical/professional/rights approval -->

# WBGT e limite di esposizione al calore (NR-15 brasiliana)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/ibutg)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Luogo dell’attività

`amb`

- `fechado` — Ambiente chiuso o con fonte artificiale di calore
- `aberto` — All’aperto, senza fonte artificiale di calore

### È presente esposizione solare diretta nel punto di misura?

`solar`

- `0` — No
- `1` — Sì

### Temperatura del bulbo umido naturale (tbn)

`tbn`

°C · intervallo: 0–45

### Temperatura del globo (tg)

`tg`

°C · intervallo: 0–90

### Temperatura del bulbo secco (tbs), solo con esposizione solare

`tbs`

°C · facoltativo · intervallo: 0–60

### Tasso metabolico medio dell’attività (tabella 2 della NR-15 brasiliana)

`m`

W · intervallo: 100–606

### Abbigliamento

`roupa`

- `0` — Uniforme (pantaloni e camicia a maniche lunghe) o tuta in tessuto: +0
- `2` — Tuta in poliolefina: +2 °C
- `3` — Indumento o tuta foderata (doppio tessuto): +3 °C
- `4` — Grembiule lungo a maniche lunghe impermeabile al vapore: +4 °C
- `10` — Tuta impermeabile al vapore: +10 °C
- `12` — Tuta impermeabile al vapore sopra gli abiti da lavoro: +12 °C
- `0.5` — Tuta in polipropilene SMS: +0,5 °C

### Indumento con cappuccio (+1 °C)

`capuz`

## Edizione del metodo

NR-15 allegato 3 ordinanza 1359/2019 e NR-9 allegato III: WBGT senza/con sole; correzione vestiario; tabella metabolica

## Formula documentata

Senza carico solare: IBUTG = 0,7 tbn + 0,3 tg. Con carico solare: IBUTG = 0,7 tbn + 0,1 tbs + 0,2 tg (NHO 06 Fundacentro).

Aggiungere correzione vestiario (tabella 4 allegato 3 NR-9; cappuccio +1 °C). Confrontare con massimo tabella 1 allegato 3 NR-15 (limite) e tabella 1 allegato 3 NR-9 (azione), alla maggior velocità metabolica tabulata non superiore all’inserita.

## Limiti e popolazione

Il limite di insalubrità dell’Allegato 3 della NR-15 riguarda ambienti chiusi o con una fonte artificiale di calore; l’allegato esclude il lavoro all’aperto senza fonte artificiale. La valutazione richiede le procedure NHO 06 e medie rappresentative dei 60 minuti consecutivi di esposizione più critica. Il calcolo da solo non determina l’insalubrità senza la valutazione e la relazione previste dalla norma. I requisiti preventivi della NR-9 hanno un ambito proprio e non devono essere confusi con questa esclusione.

## Riferimenti

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
