## 3 règles

- Tu n'écriras pas de code de prod à moins que ce ne soit pour faire passer un nouveau test unitaire
- Tu n'écriras pas plus de code de test qu'il ne suffit pour que ce dernier échoue. Et les erreurs de compilations comptent.
- Tu n'écriras pas plus de code qu'il ne suffit pour faire passer un test unitaire

```
        1 RED
        ^   \
       /     v 
 3 REFACTOR <- 2 GREEN

```

## test unitaire

- Un test unitaire n'est pas un test qui ne cible qu'une seule classe/méthode/fonction/fichier
- "UNITAIRE", dans le contexte TDD signifie : qui s'exécute indépendamment des autres tests
- il est tout à fait recommandé qu'un test unitaire traverse PLUSIEURS classes/fonctions tant qu'on sort pas du domaine
- Les objectifs d'un test sont :
	- Ne pas avoir peur de changer/refactoriser son code
	- Permettre de changer/refactoriser son code