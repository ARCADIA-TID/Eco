# Vérif237 — Backend

API Express (TypeScript, ESM) déployée sur Vercel en **zéro configuration** :
Vercel détecte `src/app.ts` (export par défaut de l'application Express) et en fait une Vercel Function.
Il n'y a donc ni dossier `api/` ni `vercel.json` à maintenir.

## Développement local

```bash
pnpm install
cp .env.example .env   # puis renseigner les clés
pnpm dev               # http://localhost:3001
```

## Déploiement sur Vercel

1. Importer le dépôt sur vercel.com (Framework détecté : Express).
2. Ajouter les variables d'environnement (Project Settings → Environment Variables) :
   `AI_PROVIDER`, `GEMINI_API_KEY`, `OPENAI_API_KEY`, `OPENAI_MODEL`, `CORS_ORIGINS`, `NODE_ENV=production`.
3. Déployer, puis tester `https://<votre-projet>.vercel.app/api/health`.

## Limites à connaître

- Sur Vercel, le disque est en lecture seule sauf `/tmp` : la base JSON (`.data/verif237_db.json`) y est copiée
  et **n'est pas persistante** (perdue à chaque nouvelle instance). Pour la production, brancher une vraie base
  (Postgres/Neon, Supabase, Redis…).
- La file de vérification (`verificationQueue`) utilise des `setTimeout` : les tâches longues peuvent être
  interrompues une fois la réponse envoyée. Prévoir une file externe (Vercel Queues, Upstash QStash…) en production.
# Eco
