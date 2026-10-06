<!-- ELUCENIA technical documentation · ibutg · fr · no clinical/professional/rights approval -->

# WBGT et limite d’exposition à la chaleur (NR-15 brésilienne)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/ibutg)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Lieu de l’activité

`amb`

- `fechado` — Milieu fermé ou avec source de chaleur artificielle
- `aberto` — En plein air, sans source de chaleur artificielle

### Y a-t-il une exposition solaire directe au point de mesure ?

`solar`

- `0` — Non
- `1` — Oui

### Température de bulbe humide naturel (tbn)

`tbn`

°C · intervalle: 0–45

### Température de globe (tg)

`tg`

°C · intervalle: 0–90

### Température de bulbe sec (tbs), uniquement avec exposition solaire

`tbs`

°C · facultatif · intervalle: 0–60

### Taux métabolique moyen de l’activité (tableau 2 de la NR-15 brésilienne)

`m`

W · intervalle: 100–606

### Vêtements

`roupa`

- `0` — Uniforme (pantalon et chemise à manches longues) ou combinaison en tissu : +0
- `2` — Combinaison en polyoléfine : +2 °C
- `3` — Vêtement ou combinaison doublé (double tissu) : +3 °C
- `4` — Tablier long à manches longues imperméable à la vapeur : +4 °C
- `10` — Combinaison imperméable à la vapeur : +10 °C
- `12` — Combinaison imperméable à la vapeur sur les vêtements de travail : +12 °C
- `0.5` — Combinaison en polypropylène SMS : +0,5 °C

### Vêtement à capuche (+1 °C)

`capuz`

## Édition de la méthode

NR-15 annexe 3 arrêté 1359/2019 et NR-9 annexe III : WBGT sans/avec soleil ; correction vêtements ; tableau métabolique

## Formule documentée

Sans charge solaire : IBUTG = 0,7 tbn + 0,3 tg. Avec charge solaire : IBUTG = 0,7 tbn + 0,1 tbs + 0,2 tg (NHO 06 Fundacentro).

Ajoutez correction vestimentaire (tableau 4 annexe 3 NR-9 ; capuche +1 °C). Comparez au maximum du tableau 1 annexe 3 NR-15 (limite) et tableau 1 annexe 3 NR-9 (action), à la plus grande valeur métabolique tabulée ne dépassant pas celle saisie.

## Limites et population

La limite d’insalubrité de la NR-15, annexe 3, concerne les espaces fermés ou dotés d’une source de chaleur artificielle ; cette annexe exclut le travail à ciel ouvert sans source artificielle. L’évaluation exige les procédures NHO 06 et des moyennes représentatives des 60 minutes consécutives d’exposition la plus critique. Le calcul seul ne caractérise pas l’insalubrité sans l’évaluation et le rapport prévus par la norme. Les exigences préventives de la NR-9 ont leur propre périmètre et ne doivent pas être confondues avec cette exclusion.

## Références

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 15 (NR-15): Atividades e Operações Insalubres, com o Anexo 3 alterado pela Portaria SEPRT nº 1.359/2019.](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-15-nr-15)

- [Brasil. Ministério do Trabalho e Emprego. Norma Regulamentadora nº 9 (NR-9): Avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, Anexo 3 (Calor).](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-9-nr-9)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Au-dessus de la limite d’exposition : activité insalubre à degré moyen (NR-15, Annexe 3) et mesures correctives obligatoires (NR-9)

| Détails du résultat | |
| --- | --- |
| IBUTG calculé (sans ajustement vestimentaire) | 29,5 °C |
| Limite d’exposition pour 300 W (IBUTG max.) | 28,2 °C |
| Niveau d’action pour 300 W | 25,0 °C |

L’évaluation juridique exige l’IBUTG moyen et le taux métabolique moyen de la pire fenêtre continue de 60 minutes, mesurés conformément à la NHO 06 de Fundacentro.


### 2

En dessous du niveau d’action pour ce taux métabolique

| Détails du résultat | |
| --- | --- |
| IBUTG calculé (sans ajustement vestimentaire) | 24,4 °C |
| Limite d’exposition pour 200 W (IBUTG max.) | 30,3 °C |
| Niveau d’action pour 200 W | 27,5 °C |

L’évaluation juridique exige l’IBUTG moyen et le taux métabolique moyen de la pire fenêtre continue de 60 minutes, mesurés conformément à la NHO 06 de Fundacentro.


### 3

Au-dessus du niveau d'action et en dessous de la limite : mesures préventives (eau fraîche, travail lourd aux heures les plus fraîches, acclimatation)

| Détails du résultat | |
| --- | --- |
| IBUTG calculé (sans ajustement vestimentaire) | 27,1 °C |
| Limite d’exposition pour 250 W (IBUTG max.) | 29,2 °C |
| Niveau d’action pour 250 W | 26,1 °C |

L’évaluation juridique exige l’IBUTG moyen et le taux métabolique moyen de la pire fenêtre continue de 60 minutes, mesurés conformément à la NHO 06 de Fundacentro.


### 4

Au-dessus de la limite d'exposition professionnelle : mesures correctives obligatoires (NR-9). L'insalubrité de l'Annexe 3 de la NR-15 ne s'applique pas aux activités en plein air sans source artificielle de chaleur

| Détails du résultat | |
| --- | --- |
| IBUTG calculé (sans ajustement vestimentaire) | 29,7 °C |
| Limite d’exposition pour 360 W (IBUTG max.) | 27,3 °C |
| Niveau d’action pour 360 W | 23,9 °C |

L’évaluation juridique exige l’IBUTG moyen et le taux métabolique moyen de la pire fenêtre continue de 60 minutes, mesurés conformément à la NHO 06 de Fundacentro.


### 5

Au-dessus de la limite d’exposition : activité insalubre à degré moyen (NR-15, Annexe 3) et mesures correctives obligatoires (NR-9)

| Détails du résultat | |
| --- | --- |
| IBUTG calculé (sans ajustement vestimentaire) | 24,4 °C |
| Ajustement vestimentaire | +10,0 °C |
| Limite d’exposition pour 200 W (IBUTG max.) | 30,3 °C |
| Niveau d’action pour 200 W | 27,5 °C |

L’évaluation juridique exige l’IBUTG moyen et le taux métabolique moyen de la pire fenêtre continue de 60 minutes, mesurés conformément à la NHO 06 de Fundacentro.

