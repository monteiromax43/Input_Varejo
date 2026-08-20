# Portal de Inputs — Claro Varejo

Portal mobile para consulta individual das pendências de input.

## Publicação na Vercel

1. Importe este repositório na Vercel.
2. Conecte um PostgreSQL pelo Marketplace da Vercel (Neon recomendado).
3. Configure `DATABASE_URL` e `SYNC_SECRET` em **Settings → Environment Variables**.
4. Faça um novo deploy e envie a Base Input para `POST /api/sincronizar`.

O visual principal está em `public/index.html`. A Base Input não é gravada no HTML ou no GitHub.

Criado e desenvolvido por Maxwell Monteiro.
