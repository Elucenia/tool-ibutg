<!-- ELUCENIA technical documentation · ibutg · zh · no clinical/professional/rights approval -->

# IBUTG 与热暴露限值（巴西 NR-15）

[条件、来源与许可](https://elucenia.org/zh/tools/ibutg)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 活动地点

`amb`

- `fechado` — 室内或有人工热源
- `aberto` — 露天，无人工热源

### 测量点是否有直接太阳辐射？

`solar`

- `0` — 否
- `1` — 是

### 自然湿球温度（tbn）

`tbn`

°C · 范围: 0–45

### 黑球温度（tg）

`tg`

°C · 范围: 0–90

### 干球温度（tbs），仅在太阳辐射下

`tbs`

°C · 选填 · 范围: 0–60

### 活动平均代谢率（NR-15 表 2）

`m`

W · 范围: 100–606

### 衣着

`roupa`

- `0` — 工作服（长裤和长袖衬衫）或织物连体工作服：+0
- `2` — 聚烯烃连体工作服：+2 °C
- `3` — 双层织物衣物或连体工作服：+3 °C
- `4` — 长袖长款不透水汽围裙：+4 °C
- `10` — 不透水汽连体工作服：+10 °C
- `12` — 工作服外穿不透水汽连体服：+12 °C
- `0.5` — SMS聚丙烯连体工作服：+0.5 °C

### 带兜帽的服装（+1 °C）

`capuz`

## 方法版本

NR-15附件3法令1359/2019及NR-9附件III：WBGT无/有日射；服装修正；代谢表

## 已记录的公式

无太阳负荷：IBUTG = 0.7 tbn + 0.3 tg。有太阳负荷：IBUTG = 0.7 tbn + 0.1 tbs + 0.2 tg（Fundacentro NHO 06）。

加服装修正（NR-9附件3表4；头罩+1 °C）。与NR-15附件3表1最大IBUTG（暴露限值）及NR-9附件3表1（行动水平）比较，选不超过输入代谢率的最高表列行。

## 限制与适用人群

NR-15附录3的职业有害条件限值适用于封闭环境或有人工热源的环境；该附录不包括无人工热源的露天作业。评估须采用NHO 06程序，以及最严重暴露的连续60分钟的代表性平均值。没有规范要求的评估和鉴定报告时，单独计算不能认定职业有害条件。NR-9预防要求有自身范围，不应与该排除条件混淆。

## 参考文献

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

高于暴露限值：中度不健康作业（NR-15，附录 3）以及强制性纠正措施（NR-9）

| 结果详情 | |
| --- | --- |
| 计算得出的 IBUTG（未进行服装调整） | 29.5 °C |
| 300 W 的暴露限值（最大 IBUTG） | 28.2 °C |
| 300 W 的行动水平 | 25.0 °C |

法律评估要求平均 IBUTG 和最差连续 60 分钟窗口的平均代谢率，并按照 Fundacentro 的 NHO 06 进行测量。


### 2

低于该代谢率的行动水平

| 结果详情 | |
| --- | --- |
| 计算得出的 IBUTG（未进行服装调整） | 24.4 °C |
| 200 W 的暴露限值（最大 IBUTG） | 30.3 °C |
| 200 W 的行动水平 | 27.5 °C |

法律评估要求平均 IBUTG 和最差连续 60 分钟窗口的平均代谢率，并按照 Fundacentro 的 NHO 06 进行测量。


### 3

高于行动水平且低于限值：预防措施（凉水、在较凉爽时段进行重体力劳动、适应热环境）

| 结果详情 | |
| --- | --- |
| 计算得出的 IBUTG（未进行服装调整） | 27.1 °C |
| 250 W 的暴露限值（最大 IBUTG） | 29.2 °C |
| 250 W 的行动水平 | 26.1 °C |

法律评估要求平均 IBUTG 和最差连续 60 分钟窗口的平均代谢率，并按照 Fundacentro 的 NHO 06 进行测量。


### 4

高于职业暴露限值：必须采取纠正措施（NR-9）。NR-15 附件 3 的不卫生规定不适用于没有人工热源的露天活动

| 结果详情 | |
| --- | --- |
| 计算得出的 IBUTG（未进行服装调整） | 29.7 °C |
| 360 W 的暴露限值（最大 IBUTG） | 27.3 °C |
| 360 W 的行动水平 | 23.9 °C |

法律评估要求平均 IBUTG 和最差连续 60 分钟窗口的平均代谢率，并按照 Fundacentro 的 NHO 06 进行测量。


### 5

高于暴露限值：中度不健康作业（NR-15，附录 3）以及强制性纠正措施（NR-9）

| 结果详情 | |
| --- | --- |
| 计算得出的 IBUTG（未进行服装调整） | 24.4 °C |
| 服装调整 | +10.0 °C |
| 200 W 的暴露限值（最大 IBUTG） | 30.3 °C |
| 200 W 的行动水平 | 27.5 °C |

法律评估要求平均 IBUTG 和最差连续 60 分钟窗口的平均代谢率，并按照 Fundacentro 的 NHO 06 进行测量。

