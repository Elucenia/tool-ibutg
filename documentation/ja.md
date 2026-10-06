<!-- ELUCENIA technical documentation · ibutg · ja · no clinical/professional/rights approval -->

# IBUTGと暑熱曝露限界（ブラジルNR-15）

[条件・出典・許諾](https://elucenia.org/ja/tools/ibutg)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 活動場所

`amb`

- `fechado` — 屋内または人工熱源あり
- `aberto` — 屋外，人工熱源なし

### 測定点に直射日光がありますか？

`solar`

- `0` — いいえ
- `1` — はい

### 自然湿球温度（tbn）

`tbn`

°C · 範囲: 0–45

### 黒球温度（tg）

`tg`

°C · 範囲: 0–90

### 乾球温度（tbs）、日射がある場合のみ

`tbs`

°C · 任意 · 範囲: 0–60

### 活動の平均代謝率（NR-15の表2）

`m`

W · 範囲: 100–606

### 衣服

`roupa`

- `0` — 制服（ズボンと長袖シャツ）または布製つなぎ：+0
- `2` — ポリオレフィン製つなぎ：+2 °C
- `3` — 裏地付き衣類またはつなぎ（二重布）：+3 °C
- `4` — 長袖で長い防蒸気性エプロン：+4 °C
- `10` — 防蒸気性つなぎ：+10 °C
- `12` — 作業着の上に防蒸気性つなぎ：+12 °C
- `0.5` — SMSポリプロピレン製つなぎ：+0.5 °C

### フード付き衣服（+1 °C）

`capuz`

## 方法の版

NR-15付属書3命令1359/2019とNR-9付属書III：WBGT日射なし/あり；衣服補正；代謝表

## 記載された計算式

日射なし：IBUTG = 0.7 tbn + 0.3 tg。日射あり：IBUTG = 0.7 tbn + 0.1 tbs + 0.2 tg（Fundacentro NHO 06）。

衣服補正を加算（NR-9付属書3表4；フード+1 °C）。NR-15付属書3表1の最大値（曝露限界），NR-9付属書3表1（対策レベル）と比較し，入力以下の最大代謝率の行を使う。

## 限界・対象集団

NR-15附属書3の有害労働環境の限度は、屋内または人工熱源のある環境に関するもので、この附属書は人工熱源のない屋外作業を除外します。評価にはNHO 06の手順と、最も厳しい曝露の連続60分間を代表する平均が必要です。規則で定める評価と鑑定書なしに、計算だけで有害性を認定することはできません。NR-9の予防上の要件には独自の適用範囲があり、この除外と混同してはいけません。

## 参考文献

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

曝露限界を超える: 中等度の不健康作業（NR-15、付属書 3）および是正措置の義務（NR-9）

| 結果の詳細 | |
| --- | --- |
| 算出された IBUTG（服装補正なし） | 29.5 °C |
| 300 W の曝露限界（IBUTG 最大） | 28.2 °C |
| 300 W の行動レベル | 25.0 °C |

法的評価では、Fundacentro の NHO 06 に従って測定された、最悪の連続 60 分間の平均 IBUTG と平均代謝率が必要です。


### 2

この代謝率では行動レベルを下回る

| 結果の詳細 | |
| --- | --- |
| 算出された IBUTG（服装補正なし） | 24.4 °C |
| 200 W の曝露限界（IBUTG 最大） | 30.3 °C |
| 200 W の行動レベル | 27.5 °C |

法的評価では、Fundacentro の NHO 06 に従って測定された、最悪の連続 60 分間の平均 IBUTG と平均代謝率が必要です。


### 3

行動レベルを超え、限界値を下回る：予防措置（冷たい水、涼しい時間帯での重労働、順化）

| 結果の詳細 | |
| --- | --- |
| 算出された IBUTG（服装補正なし） | 27.1 °C |
| 250 W の曝露限界（IBUTG 最大） | 29.2 °C |
| 250 W の行動レベル | 26.1 °C |

法的評価では、Fundacentro の NHO 06 に従って測定された、最悪の連続 60 分間の平均 IBUTG と平均代謝率が必要です。


### 4

職業曝露限界を超過：是正措置が義務付けられる（NR-9）。NR-15 の附属書3の不衛生規定は、人工熱源のない屋外活動には適用されない

| 結果の詳細 | |
| --- | --- |
| 算出された IBUTG（服装補正なし） | 29.7 °C |
| 360 W の曝露限界（IBUTG 最大） | 27.3 °C |
| 360 W の行動レベル | 23.9 °C |

法的評価では、Fundacentro の NHO 06 に従って測定された、最悪の連続 60 分間の平均 IBUTG と平均代謝率が必要です。


### 5

曝露限界を超える: 中等度の不健康作業（NR-15、付属書 3）および是正措置の義務（NR-9）

| 結果の詳細 | |
| --- | --- |
| 算出された IBUTG（服装補正なし） | 24.4 °C |
| 服装調整 | +10.0 °C |
| 200 W の曝露限界（IBUTG 最大） | 30.3 °C |
| 200 W の行動レベル | 27.5 °C |

法的評価では、Fundacentro の NHO 06 に従って測定された、最悪の連続 60 分間の平均 IBUTG と平均代謝率が必要です。

