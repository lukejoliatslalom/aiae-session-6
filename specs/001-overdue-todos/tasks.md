# Tasks: Support for Overdue Todo Items

**Input**: Design documents from `/specs/001-overdue-todos/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are REQUIRED for functional changes. If tests are omitted, document a clear
exception rationale in the tasks list.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Testing fixtures and helpers used across stories

- [ ] T001 [P] Add overdue-focused mock todos in packages/frontend/src/__mocks__/todoData.js
- [ ] T002 [P] Add deterministic date helpers for tests in packages/frontend/src/__tests__/testUtils.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared overdue calculation logic used by multiple stories

- [ ] T003 Create overdue utility function in packages/frontend/src/utils/dateUtils.js
- [ ] T004 [P] Add unit tests for overdue utility in packages/frontend/src/utils/__tests__/dateUtils.test.js

**Checkpoint**: Shared overdue logic and tests complete

---

## Phase 3: User Story 1 - Identify overdue todos in the list (Priority: P1) 🎯 MVP

**Goal**: Show a red, text-only "Overdue" badge next to the due date for incomplete past-due items

**Independent Test**: Render a list with past, today, and no-due-date items and verify the badge
only appears on past-due incomplete todos.

### Tests for User Story 1 ⚠️

- [ ] T005 [P] [US1] Add overdue badge render tests in packages/frontend/src/components/__tests__/TodoCard.test.js

### Implementation for User Story 1

- [ ] T006 [US1] Compute overdue state using date utility in packages/frontend/src/components/TodoCard.js
- [ ] T007 [P] [US1] Add overdue badge styling in packages/frontend/src/App.css

**Checkpoint**: Overdue badge renders correctly for past-due incomplete items

---

## Phase 4: User Story 2 - Overdue status updates with todo changes (Priority: P2)

**Goal**: Keep overdue indicator accurate when todos are edited or completed

**Independent Test**: Toggle completion and update due dates to confirm the badge updates immediately.

### Tests for User Story 2 ⚠️

- [ ] T008 [P] [US2] Add interaction test for overdue badge updates in packages/frontend/src/__tests__/App.test.js

### Implementation for User Story 2

- [ ] T009 [US2] Ensure overdue logic treats completed values consistently in packages/frontend/src/components/TodoCard.js

**Checkpoint**: Badge updates immediately after edits or completion changes

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation alignment and final validation

- [ ] T010 [P] Update quickstart validation steps if needed in specs/001-overdue-todos/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Phase 2
- **User Story 2 (P2)**: Depends on Phase 2 and reuses US1 rendering

### Parallel Opportunities

- T001 + T002 can run in parallel
- T004 can run in parallel once T003 is done
- T005 and T007 can run in parallel once T003 is done
- T008 can run in parallel with T007 after US1 rendering is stable

---

## Parallel Example: User Story 1

```bash
Task: "Add overdue badge render tests in packages/frontend/src/components/__tests__/TodoCard.test.js"
Task: "Add overdue badge styling in packages/frontend/src/App.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate with quickstart steps

### Incremental Delivery

1. Setup + Foundational
2. User Story 1 (MVP)
3. User Story 2
4. Polish
