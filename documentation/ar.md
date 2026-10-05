<!-- ELUCENIA technical documentation · ibutg · ar · no clinical/professional/rights approval -->

# مؤشر IBUTG وحد التعرض للحرارة (NR-15 البرازيلي)

[الشروط والمصادر والأذونات](https://elucenia.org/ar/tools/ibutg)

## كيفية الاستخدام

استخدم الأداة في البوابة أو افتح index.html عبر خادم HTTP محلي. اختر اللغة، وأكمل الحقول، ثم أجرِ الحساب.

## المدخلات والوحدات

### موقع النشاط

`amb`

- `fechado` — مكان مغلق أو مع مصدر حرارة اصطناعي
- `aberto` — في الهواء الطلق دون مصدر حرارة اصطناعي

### هل يوجد تعرض شمسي مباشر في نقطة القياس؟

`solar`

- `0` — لا
- `1` — نعم

### درجة حرارة البصيلة الرطبة الطبيعية (tbn)

`tbn`

°C · النطاق: ٠–٤٥

### درجة حرارة الكرة (tg)

`tg`

°C · النطاق: ٠–٩٠

### درجة حرارة البصيلة الجافة (tbs)، عند الحمل الشمسي فقط

`tbs`

°C · اختياري · النطاق: ٠–٦٠

### متوسط معدل الاستقلاب للنشاط (الجدول ٢ من NR-15)

`m`

W · النطاق: ١٠٠–٦٠٦

### الملابس

`roupa`

- `0` — زيّ عمل (بنطال وقميص بأكمام طويلة) أو بدلة عمل قماشية: +٠
- `2` — بدلة عمل من البولي أوليفين: +٢ °C
- `3` — ملابس أو بدلة عمل مبطّنة (قماش مزدوج): +٣ °C
- `4` — مئزر طويل بأكمام طويلة غير نافذ للبخار: +٤ °C
- `10` — بدلة عمل غير نافذة للبخار: +١٠ °C
- `12` — بدلة عمل غير نافذة للبخار فوق ملابس العمل: +١٢ °C
- `0.5` — بدلة عمل من البولي بروبيلين SMS: +٠٫٥ °C

### ملابس بغطاء رأس (+١ °C)

`capuz`

## إصدار الطريقة

NR-15 الملحق 3 قرار 1359/2019 وNR-9 الملحق III: WBGT دون/مع شمس؛ تعديل ملابس؛ جدول أيضي

## المعادلة الموثقة

دون حمل شمسي: IBUTG = 0.7 tbn + 0.3 tg. مع حمل شمسي: IBUTG = 0.7 tbn + 0.1 tbs + 0.2 tg (Fundacentro NHO 06).

أضف تعديل الملابس (جدول 4، ملحق 3 NR-9؛ غطاء الرأس +1 °C). قارن بالأقصى في جدول 1 ملحق 3 NR-15 (حدّ التعرّض) وجدول 1 ملحق 3 NR-9 (مستوى الإجراء)، عند أعلى معدّل أيضي مجدول لا يتجاوز المدخل.

## الحدود والفئة السكانية

يتعلق حد ظروف العمل الضارة بالصحة في NR-15، الملحق 3 بالبيئات المغلقة أو التي يوجد فيها مصدر حراري اصطناعي؛ ويستبعد هذا الملحق العمل في الهواء الطلق دون مصدر اصطناعي. يتطلب التقييم إجراءات NHO 06 ومتوسطات ممثلة للدقائق الـ60 المتتالية من التعرض الأشد خطورة. لا يثبت الحساب وحده وجود ظروف ضارة بالصحة دون التقييم والتقرير المنصوص عليهما في المعيار. للمتطلبات الوقائية في NR-9 نطاق خاص بها، ولا ينبغي الخلط بينها وبين هذا الاستبعاد.

## المراجع

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## إعادة إجراء الاختبارات التقنية

شغّل node test.cjs في المجلد الجذري لهذا المستودع لتكرار الحالات الاصطناعية المسجلة. تُحفظ المدخلات والنتائج المتوقعة وحدود التفاوت الأصلية. لا تُعدّ الاختبارات التقنية تحققًا سريريًا.

```sh
node test.cjs
```

يحتوي tool.json على المصادر والإصدار ونطاق المراجعة. يحتفظ examples.json بالمدخلات والنتائج المتوقعة للحالات الاصطناعية؛ ويسجل results.json النتائج التي تم الحصول عليها.

[السجل والمراجع](../tool.json) · [شيفرة JavaScript](../calculator.js) · [حالات مرجعية](../examples.json) · [results.json](../results.json)

## المراجعة وشروط الاستخدام

لم تُجرَ مراجعة سريرية مستقلة.

هذه الواجهة ترجمة أعدّها مؤلفوها، وليست إصدارًا رسميًا أو معتمدًا. لم تُجرَ مراجعة سريرية مستقلة أو مراجعة لغوية مهنية، ولم تُستكمل الموافقة على حقوق استخدام الأدوات.

نتيجة المعادلة أو التصنيف. يعتمد التفسير والتصرف ومدى الانطباق على التقييم المهني والمصدر المحدد.

## الترخيص ونسبة العمل إلى أصحابه

ينطبق Apache-2.0 على كود ELUCENIA فقط. تبقى حقوق الأدوات والمنشورات والترجمات والبيانات لأصحابها المعنيين. احتفظ بملفّي LICENSE وNOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
