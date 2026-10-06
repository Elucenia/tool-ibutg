<!-- ELUCENIA technical documentation · ibutg · es · no clinical/professional/rights approval -->

# WBGT y límite de exposición al calor (NR-15 brasileña)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/ibutg)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Lugar de la actividad

`amb`

- `fechado` — Ambiente cerrado o con fuente artificial de calor
- `aberto` — Al aire libre, sin fuente artificial de calor

### ¿Hay exposición solar directa en el punto de medición?

`solar`

- `0` — No
- `1` — Sí

### Temperatura de bulbo húmedo natural (tbn)

`tbn`

°C · intervalo: 0–45

### Temperatura de globo (tg)

`tg`

°C · intervalo: 0–90

### Temperatura de bulbo seco (tbs), solo con exposición solar

`tbs`

°C · opcional · intervalo: 0–60

### Tasa metabólica media de la actividad (cuadro 2 de la NR-15 brasileña)

`m`

W · intervalo: 100–606

### Vestimenta

`roupa`

- `0` — Uniforme (pantalón y camisa de manga larga) o mono de tejido: +0
- `2` — Mono de poliolefina: +2 °C
- `3` — Ropa o mono forrado (doble tejido): +3 °C
- `4` — Delantal largo de manga larga impermeable al vapor: +4 °C
- `10` — Mono impermeable al vapor: +10 °C
- `12` — Mono impermeable al vapor sobre la ropa de trabajo: +12 °C
- `0.5` — Mono de polipropileno SMS: +0,5 °C

### Ropa con capucha (+1 °C)

`capuz`

## Edición del método

NR-15 Anexo 3 Ordenanza 1359/2019 y NR-9 Anexo III: WBGT sin/con sol; ajuste ropa; tabla metabólica

## Fórmula documentada

Sin carga solar: IBUTG = 0,7 tbn + 0,3 tg. Con carga solar: IBUTG = 0,7 tbn + 0,1 tbs + 0,2 tg (NHO 06 Fundacentro).

Se suma ajuste de ropa (Cuadro 4 del Anexo 3 NR-9; capucha +1 °C). Compare con máximo del Cuadro 1 Anexo 3 NR-15 (límite) y Cuadro 1 Anexo 3 NR-9 (acción), usando la mayor tasa metabólica tabulada que no supere la informada.

## Límites y población

El límite de insalubridad de la NR-15 Anexo 3 se refiere a ambientes cerrados o con una fuente artificial de calor; ese anexo excluye el trabajo al aire libre sin fuente artificial. La evaluación exige los procedimientos NHO 06 y promedios representativos de los 60 minutos consecutivos de exposición más crítica. El cálculo aislado no caracteriza la insalubridad sin la evaluación y el informe previstos en la norma. Los requisitos preventivos de la NR-9 tienen su propio alcance y no deben confundirse con esta exclusión.

## Referencias

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Por encima del límite de exposición: actividad insalubre en grado medio (NR-15, Anexo 3) y medidas correctivas obligatorias (NR-9)

| Detalles del resultado | |
| --- | --- |
| IBUTG calculado (sin ajuste de vestimenta) | 29,5 °C |
| Límite de exposición para 300 W (IBUTG máx.) | 28,2 °C |
| Nivel de acción para 300 W | 25,0 °C |

La evaluación legal exige el IBUTG medio y la tasa metabólica media de la peor ventana continua de 60 minutos, medidos conforme a la NHO 06 de Fundacentro.


### 2

Por debajo del nivel de acción para esta tasa metabólica

| Detalles del resultado | |
| --- | --- |
| IBUTG calculado (sin ajuste de vestimenta) | 24,4 °C |
| Límite de exposición para 200 W (IBUTG máx.) | 30,3 °C |
| Nivel de acción para 200 W | 27,5 °C |

La evaluación legal exige el IBUTG medio y la tasa metabólica media de la peor ventana continua de 60 minutos, medidos conforme a la NHO 06 de Fundacentro.


### 3

Por encima del nivel de acción y por debajo del límite: medidas preventivas (agua fresca, trabajo pesado en los horarios más frescos, aclimatación)

| Detalles del resultado | |
| --- | --- |
| IBUTG calculado (sin ajuste de vestimenta) | 27,1 °C |
| Límite de exposición para 250 W (IBUTG máx.) | 29,2 °C |
| Nivel de acción para 250 W | 26,1 °C |

La evaluación legal exige el IBUTG medio y la tasa metabólica media de la peor ventana continua de 60 minutos, medidos conforme a la NHO 06 de Fundacentro.


### 4

Por encima del límite de exposición ocupacional: medidas correctivas obligatorias (NR-9). La insalubridad del Anexo 3 de la NR-15 no se aplica a actividades al aire libre sin fuente artificial de calor

| Detalles del resultado | |
| --- | --- |
| IBUTG calculado (sin ajuste de vestimenta) | 29,7 °C |
| Límite de exposición para 360 W (IBUTG máx.) | 27,3 °C |
| Nivel de acción para 360 W | 23,9 °C |

La evaluación legal exige el IBUTG medio y la tasa metabólica media de la peor ventana continua de 60 minutos, medidos conforme a la NHO 06 de Fundacentro.


### 5

Por encima del límite de exposición: actividad insalubre en grado medio (NR-15, Anexo 3) y medidas correctivas obligatorias (NR-9)

| Detalles del resultado | |
| --- | --- |
| IBUTG calculado (sin ajuste de vestimenta) | 24,4 °C |
| Ajuste de vestimenta | +10,0 °C |
| Límite de exposición para 200 W (IBUTG máx.) | 30,3 °C |
| Nivel de acción para 200 W | 27,5 °C |

La evaluación legal exige el IBUTG medio y la tasa metabólica media de la peor ventana continua de 60 minutos, medidos conforme a la NHO 06 de Fundacentro.

