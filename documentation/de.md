<!-- ELUCENIA technical documentation · ibutg · de · no clinical/professional/rights approval -->

# WBGT und Hitzeexpositionsgrenze (brasilianische NR-15)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/ibutg)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Ort der Tätigkeit

`amb`

- `fechado` — Innenraum oder mit künstlicher Wärmequelle
- `aberto` — Im Freien, ohne künstliche Wärmequelle

### Besteht direkte Sonneneinstrahlung am Messpunkt?

`solar`

- `0` — Nein
- `1` — Ja

### Natürliche Feuchtkugeltemperatur (tbn)

`tbn`

°C · Bereich: 0–45

### Globustemperatur (tg)

`tg`

°C · Bereich: 0–90

### Trockenkugeltemperatur (tbs), nur bei Sonneneinstrahlung

`tbs`

°C · optional · Bereich: 0–60

### Mittlerer Stoffwechselumsatz der Tätigkeit (Tabelle 2 der brasilianischen NR-15)

`m`

W · Bereich: 100–606

### Bekleidung

`roupa`

- `0` — Arbeitskleidung (Hose und langärmeliges Hemd) oder Stoffoverall: +0
- `2` — Polyolefin-Schutzanzug: +2 °C
- `3` — Gefütterte Kleidung oder Overall (doppelte Stofflage): +3 °C
- `4` — Lange dampfundurchlässige Schürze mit langen Ärmeln: +4 °C
- `10` — Dampfdichter Schutzanzug: +10 °C
- `12` — Dampfdichter Schutzanzug über Arbeitskleidung: +12 °C
- `0.5` — SMS-Polypropylen-Schutzanzug: +0,5 °C

### Kleidung mit Kapuze (+1 °C)

`capuz`

## Fassung der Methode

NR-15 Anhang 3 Verordnung 1359/2019 und NR-9 Anhang III: WBGT ohne/mit Sonne; Kleidungskorrektur; Stoffwechseltabelle

## Dokumentierte Formel

Ohne Sonnenlast: IBUTG = 0,7 tbn + 0,3 tg. Mit Sonnenlast: IBUTG = 0,7 tbn + 0,1 tbs + 0,2 tg (Fundacentro NHO 06).

Kleidungskorrektur addieren (Tabelle 4 Anhang 3 NR-9; Kapuze +1 °C). Vergleich mit Maximum aus Tabelle 1 Anhang 3 NR-15 (Grenze) und Tabelle 1 Anhang 3 NR-9 (Aktionsniveau), in der Zeile der höchsten Tabellen-Stoffwechselrate, die die Eingabe nicht übersteigt.

## Grenzen und Population

Der gesundheitsgefährdende Expositionsgrenzwert nach NR-15 Anhang 3 betrifft geschlossene Umgebungen oder solche mit künstlicher Wärmequelle; dieser Anhang schließt Arbeit unter freiem Himmel ohne künstliche Quelle aus. Die Bewertung erfordert NHO-06-Verfahren und repräsentative Mittelwerte der 60 aufeinanderfolgenden Minuten mit kritischster Exposition. Die Berechnung allein stellt ohne die normgemäße Bewertung und Begutachtung keine gesundheitsgefährdende Arbeitsbedingung fest. Die Präventionsanforderungen der NR-9 haben einen eigenen Umfang und dürfen nicht mit diesem Ausschluss verwechselt werden.

## Referenzen

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Oberhalb der Expositionsgrenze: gesundheitsschädliche Tätigkeit mittleren Grades (NR-15, Anhang 3) und verpflichtende Korrekturmaßnahmen (NR-9)

| Ergebnisdetails | |
| --- | --- |
| Berechneter IBUTG (ohne Kleidungskorrektur) | 29,5 °C |
| Expositionsgrenze für 300 W (max. IBUTG) | 28,2 °C |
| Maßnahmenstufe für 300 W | 25,0 °C |

Die rechtliche Bewertung erfordert den durchschnittlichen IBUTG und die durchschnittliche Stoffwechselrate des ungünstigsten fortlaufenden 60-Minuten-Fensters, gemessen gemäß der NHO 06 von Fundacentro.


### 2

Unterhalb der Maßnahmenstufe für diese Stoffwechselrate

| Ergebnisdetails | |
| --- | --- |
| Berechneter IBUTG (ohne Kleidungskorrektur) | 24,4 °C |
| Expositionsgrenze für 200 W (max. IBUTG) | 30,3 °C |
| Maßnahmenstufe für 200 W | 27,5 °C |

Die rechtliche Bewertung erfordert den durchschnittlichen IBUTG und die durchschnittliche Stoffwechselrate des ungünstigsten fortlaufenden 60-Minuten-Fensters, gemessen gemäß der NHO 06 von Fundacentro.


### 3

Über dem Aktionsniveau und unter der Grenze: vorbeugende Maßnahmen (kühles Wasser, schwere Arbeit in den kühleren Zeiten, Akklimatisierung)

| Ergebnisdetails | |
| --- | --- |
| Berechneter IBUTG (ohne Kleidungskorrektur) | 27,1 °C |
| Expositionsgrenze für 250 W (max. IBUTG) | 29,2 °C |
| Maßnahmenstufe für 250 W | 26,1 °C |

Die rechtliche Bewertung erfordert den durchschnittlichen IBUTG und die durchschnittliche Stoffwechselrate des ungünstigsten fortlaufenden 60-Minuten-Fensters, gemessen gemäß der NHO 06 von Fundacentro.


### 4

Über dem beruflichen Expositionsgrenzwert: verpflichtende Korrekturmaßnahmen (NR-9). Die Regelung zur Gesundheitsgefährdung in Anhang 3 der NR-15 gilt nicht für Tätigkeiten im Freien ohne künstliche Wärmequelle

| Ergebnisdetails | |
| --- | --- |
| Berechneter IBUTG (ohne Kleidungskorrektur) | 29,7 °C |
| Expositionsgrenze für 360 W (max. IBUTG) | 27,3 °C |
| Maßnahmenstufe für 360 W | 23,9 °C |

Die rechtliche Bewertung erfordert den durchschnittlichen IBUTG und die durchschnittliche Stoffwechselrate des ungünstigsten fortlaufenden 60-Minuten-Fensters, gemessen gemäß der NHO 06 von Fundacentro.


### 5

Oberhalb der Expositionsgrenze: gesundheitsschädliche Tätigkeit mittleren Grades (NR-15, Anhang 3) und verpflichtende Korrekturmaßnahmen (NR-9)

| Ergebnisdetails | |
| --- | --- |
| Berechneter IBUTG (ohne Kleidungskorrektur) | 24,4 °C |
| Kleidungsanpassung | +10,0 °C |
| Expositionsgrenze für 200 W (max. IBUTG) | 30,3 °C |
| Maßnahmenstufe für 200 W | 27,5 °C |

Die rechtliche Bewertung erfordert den durchschnittlichen IBUTG und die durchschnittliche Stoffwechselrate des ungünstigsten fortlaufenden 60-Minuten-Fensters, gemessen gemäß der NHO 06 von Fundacentro.

