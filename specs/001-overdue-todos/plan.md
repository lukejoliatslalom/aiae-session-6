# Implementation Plan: Support for Overdue Todo Items

**Branch**: `001-overdue-todos` | **Date**: 2026-02-05 | **Spec**: [specs/001-overdue-todos/spec.md](specs/001-overdue-todos/spec.md)
**Input**: Feature specification from `/specs/001-overdue-todos/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Add a red, text-only "Overdue" badge next to the due date for incomplete todos
whose due date is before the client local date. The overdue status is derived
in the frontend without backend schema or API changes, and updates immediately
when todos change.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript (Node.js 16+), React 18  
**Primary Dependencies**: React, react-scripts, Express, better-sqlite3, fetch API  
**Storage**: In-memory SQLite (better-sqlite3)  
**Testing**: Jest, React Testing Library, Supertest  
**Target Platform**: Web (React SPA) + Node.js API on Linux  
**Project Type**: Web application (monorepo with frontend + backend)  
**Performance Goals**: No explicit targets; keep UI responsive for typical todo lists  
**Constraints**: No schema changes, no sorting/filtering changes, single-user scope,
badge must be readable in light and dark themes  
**Scale/Scope**: Single-user, small dataset (dozens to hundreds of todos)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Scope aligned with functional requirements and out-of-scope boundaries.
- UI impacts follow the Halloween theme, layout, and accessibility rules.
- Testing plan includes unit/integration coverage with 80%+ target.
- Code quality plan follows formatting, naming, SRP/DRY/KISS guidance.
- Reliability plan covers error handling and user feedback on failures.

**Post-Design Check**: PASS (no violations)

## Project Structure

### Documentation (this feature)

```text
specs/001-overdue-todos/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
packages/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── index.js
│   │   └── services/
│   │       └── todoService.js
│   └── __tests__/
└── frontend/
  ├── src/
  │   ├── components/
  │   ├── services/
  │   ├── styles/
  │   ├── App.js
  │   └── App.css
  └── __tests__/
```

**Structure Decision**: Web application monorepo with React frontend and
Express backend under `packages/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations.
