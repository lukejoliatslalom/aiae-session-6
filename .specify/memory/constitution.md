<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles: None (initial creation from guidelines)
- Added sections: Product & Technical Constraints; Development Workflow & Quality Gates
- Removed sections: None
- Templates requiring updates: ✅ .specify/templates/plan-template.md; ✅ .specify/templates/spec-template.md; ✅ .specify/templates/tasks-template.md; ⚠ .specify/templates/commands/*.md (directory not found)
- Follow-up TODOs: TODO(RATIFICATION_DATE) pending adoption date
-->
# Copilot Bootcamp Todo App Constitution

## Core Principles

### I. Scope-First Delivery
All work MUST adhere to the functional requirements and out-of-scope boundaries
defined in the project docs. Features like auth, multi-user, search, bulk
operations, or mobile-specific optimization MUST NOT be added without a formal
constitution amendment. This keeps delivery focused and predictable.

### II. UI Consistency and Accessibility
Frontend changes MUST follow the Halloween-themed UI guidelines: the defined
palette, typography, spacing scale, and single-column layout. Light/dark mode
MUST be supported with persistent user preference, and accessibility basics
(keyboard access, contrast, labels, focus indicators) MUST be preserved.
This ensures a cohesive and usable experience.

### III. Code Clarity and Simplicity
Code MUST follow the coding guidelines for formatting, naming, import order,
and single-responsibility design. Prefer simple, readable solutions (KISS),
avoid duplication (DRY), and keep modules focused. This reduces maintenance
costs and speeds onboarding.

### IV. Test Discipline and Coverage
Tests MUST validate behavior, not implementation, and follow TDD where
practical. New functionality MUST include unit and/or integration tests as
appropriate, with a target of 80%+ coverage across packages. Tests MUST be
isolated and deterministic to keep the suite reliable.

### V. Reliability and User Feedback
Errors MUST be handled gracefully with meaningful user feedback. Todo changes
MUST persist immediately via the backend, and failures MUST surface clearly to
users. Production code MUST avoid stray console logging. This protects user
trust and data integrity.

## Product & Technical Constraints

- Stack is fixed: React frontend and Express.js backend in a monorepo.
- Single-user application only; no user identification or multi-tenant logic.
- No database schema changes beyond basic todo storage.
- UI remains desktop-focused with responsive layout, but no mobile-specific
	feature work.
- Out-of-scope items in the functional requirements remain out of scope unless
	amended through governance.

## Development Workflow & Quality Gates

- Follow linting and formatting rules before opening PRs.
- Use feature branches and atomic commits with descriptive messages.
- Code reviews MUST verify constitution compliance and test coverage.
- Specs and plans MUST include an explicit Constitution Check gate.
- If tests are omitted for a change, the exception MUST be documented with a
	clear rationale.

## Governance

- This constitution is the highest-level project authority; guidelines and
	templates must align with it.
- Amendments require a documented proposal, rationale, and approval in PRs.
- Versioning uses semantic versioning: MAJOR for breaking governance changes,
	MINOR for new principles or sections, PATCH for clarifications.
- Compliance reviews are required for specs, plans, and tasks; non-compliance
	must be justified and tracked.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): adoption date unknown | **Last Amended**: 2026-02-05
