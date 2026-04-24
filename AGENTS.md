# AGENTS.md

> Note: `CLAUDE.md` is a file that references AGENTS.md. They share the same guidance.

## Purpose

This repository is an Nx monorepo for an IT tech blog platform built with Next.js.

Agents must optimize for:

- maintainability
- consistency across packages
- small, verifiable changes

## Workspace Overview

### Multi-zone Architecture

This project uses **Next.js Multi-Zones**. `main-web` is the host that proxies zone routes:

| App                  | Port | Path prefix      |
| -------------------- | ---- | ---------------- |
| `main-web`           | 3000 | `/` (host)       |
| `accessibility-zone` | 4001 | `/accessibility` |

`main-web` rewrites `/accessibility/*` and `/accessibility-static/*` to `accessibility-zone` via `ACCESSIBILITY_DOMAIN` env var (default: `http://localhost:4001`).

### Directory Structure

- `apps/main-web` — host Next.js app (rewrites to zones)
- `apps/main-web-e2e` — Playwright E2E tests for main-web
- `apps/accessibility-zone` — accessibility-focused zone (basePath: `/accessibility`)
- `apps/accessibility-zone-e2e` — Playwright E2E tests for accessibility-zone

### Nx Projects

Detected by Nx plugins (`@nx/next`, `@nx/eslint`, `@nx/playwright`, `@nx/js/typescript`):

- `@it-tech-blog/main-web`
- `@it-tech-blog/accessibility-zone`
- `@it-tech-blog/main-web-e2e`
- `@it-tech-blog/accessibility-zone-e2e`

## How To Work In This Repository

### Default working style

- Work incrementally.
- Make the smallest valid change first.
- Validate each increment before expanding scope.
- Prefer modifying existing patterns rather than introducing new abstractions.
- Avoid broad refactors unless the task explicitly requires them.

### When requirements are unclear

- Check nearby code and docs before guessing.
- If still unclear, state the exact uncertainty.
- Do not silently make large architectural assumptions.

## Package Management and Task Execution

### Tooling

- Use `pnpm` for package management.
- Use `nx` targets when available.

### Root scripts

```bash
pnpm dev               # run main-web + accessibility-zone in parallel
pnpm dev:main          # main-web only (port 3000)
pnpm dev:a11y          # accessibility-zone only (port 4001)
pnpm build             # build main-web + accessibility-zone
pnpm build:main        # build main-web only
pnpm build:a11y        # build accessibility-zone only
pnpm lint              # lint all projects
pnpm typecheck         # typecheck all projects
pnpm format            # prettier --write
pnpm format:check      # prettier --check
pnpm e2e               # run all Playwright E2E tests
```

### Dependency discipline

- Prefer existing dependencies already used in the workspace.
- Add new dependencies only when clearly justified.

## Coding Rules

### General

- Prefer short, focused modules and functions.
- Use clear names.
- Favor clarity over cleverness.
- Keep comments sparse and useful.
- Prefer docstrings or API-facing documentation over noisy inline comments.
- Prefer arrow functions for JavaScript and TypeScript functions unless a regular function is clearly better for the use case.

## Validation Rules

### Default rule

Every meaningful behavior change should be validated.

### Validation order

1. Run the smallest relevant check first.
2. Run package-level checks.
3. Run broader workspace checks only when needed.

### Examples of what to validate

- if logic changed: run tests
- if public types changed: run typecheck
- if export/build behavior changed: run build
- if UI behavior changed: inspect story/demo coverage when practical

## Things To Avoid

- Do not manually edit build outputs.
- Do not bypass established Nx targets when they already exist.
- Do not change CI, release, or workflow files unless the task is explicitly about automation or delivery.
- Do not introduce large refactors into a focused task unless requested.
