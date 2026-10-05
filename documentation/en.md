<!-- ELUCENIA technical documentation · ibutg · en · no clinical/professional/rights approval -->

# WBGT and heat exposure limit (Brazilian NR-15)

[conditions, sources and permissions](https://elucenia.org/en/tools/ibutg)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Activity location

`amb`

- `fechado` — Indoor environment or artificial heat source
- `aberto` — Outdoors, without an artificial heat source

### Is there direct solar exposure at the measurement point?

`solar`

- `0` — No
- `1` — Yes

### Natural wet-bulb temperature (tbn)

`tbn`

°C · range: 0–45

### Globe temperature (tg)

`tg`

°C · range: 0–90

### Dry-bulb temperature (tbs), only with solar exposure

`tbs`

°C · optional · range: 0–60

### Mean metabolic rate of the activity (Table 2 of Brazilian NR-15)

`m`

W · range: 100–606

### Clothing

`roupa`

- `0` — Uniform (trousers and long-sleeved shirt) or fabric coveralls: +0
- `2` — Polyolefin coveralls: +2 °C
- `3` — Lined clothing or coveralls (double fabric layer): +3 °C
- `4` — Long vapor-impermeable apron with long sleeves: +4 °C
- `10` — Vapor-barrier coveralls: +10 °C
- `12` — Vapor-barrier coveralls over work clothes: +12 °C
- `0.5` — SMS polypropylene coveralls: +0.5 °C

### Hooded clothing (+1 °C)

`capuz`

## Method edition

NR-15 Annex 3 Ordinance 1359/2019 and NR-9 Annex III: WBGT without/with sun; clothing adjustment; metabolic-rate table

## Documented formula

Without solar load: IBUTG = 0.7 tbn + 0.3 tg. With solar load: IBUTG = 0.7 tbn + 0.1 tbs + 0.2 tg (Fundacentro NHO 06).

Add clothing adjustment (Table 4, Annex 3, NR-9; hood +1 °C). Compare with maximum IBUTG in Table 1, Annex 3, NR-15 (exposure limit) and Table 1, Annex 3, NR-9 (action level), using the highest tabulated metabolic-rate row not exceeding the entered rate.

## Limits and population

The NR-15 Annex 3 unhealthy-work limit concerns enclosed environments or those with an artificial heat source; the annex excludes outdoor work without an artificial source. Assessment requires NHO 06 procedures and representative averages of the 60 consecutive minutes of most critical exposure. The calculation alone does not establish an unhealthy-work condition without the assessment and report required by the standard. NR-9 preventive requirements have their own scope and must not be confused with this exclusion.

## References

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
