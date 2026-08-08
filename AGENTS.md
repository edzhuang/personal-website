# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single **Next.js 16 (App Router, Turbopack)** personal portfolio site. It is fully static — there is no backend, database, environment variables, or external service, and there are no automated tests.

- Package manager is **pnpm** (see `pnpm-lock.yaml`). Node and pnpm are already available in the environment; the startup update script runs `pnpm install`.
- Standard commands are defined in `package.json` scripts: `pnpm dev` (dev server on port 3000), `pnpm build`, `pnpm start`, and `pnpm lint`.
- To run the site during development, use `pnpm dev` and open `http://localhost:3000`. Start it in a background/`tmux` session since it is a long-running process.
- Page content (experience/projects lists) lives in `lib/data.ts`; the single page is `app/page.tsx`. The theme toggle (light/dark) is the main interactive feature and is powered by `next-themes`.
- `next.config.ts` sets `allowedDevOrigins` so the dev server can be reached from proxied/preview hosts — keep this in mind if the site must be accessed from a non-localhost origin.
