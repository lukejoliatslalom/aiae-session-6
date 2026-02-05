# Feature Specification: Support for Overdue Todo Items

**Feature Branch**: `001-overdue-todos`  
**Created**: 2026-02-05  
**Status**: Draft  
**Input**: User description: "Support for Overdue Todo Items. As a todo application user, I want to easily identify and distinguish overdue tasks in my todo list so that I can prioritize my work and quickly see which tasks are past their due date. Users need a clear, visual way to identify which todos have not been completed by their due date."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Identify overdue todos in the list (Priority: P1)

As a user, I can see which incomplete todos are overdue at a glance so I can
prioritize them immediately.

**Why this priority**: This delivers the core value of the feature: fast
recognition of overdue work.

**Independent Test**: Load a list containing past-due, due-today, and no-due-date
items and verify that only past-due incomplete items are visually distinguished.

**Acceptance Scenarios**:

1. **Given** an incomplete todo with a due date before the current local date,
   **When** the list is displayed, **Then** the todo is visually marked as
   overdue.
2. **Given** an incomplete todo with a due date equal to the current local date,
   **When** the list is displayed, **Then** the todo is not marked as overdue.
3. **Given** an incomplete todo with no due date, **When** the list is displayed,
   **Then** the todo is not marked as overdue.

---

### User Story 2 - Overdue status updates with todo changes (Priority: P2)

As a user, when I complete a task or change its due date, the overdue indicator
updates so I always see the correct status.

**Why this priority**: Keeping the indicator current prevents confusion and
maintains trust in the list.

**Independent Test**: Toggle completion or update due dates on sample todos and
verify the overdue indicator updates immediately.

**Acceptance Scenarios**:

1. **Given** an overdue todo, **When** I mark it complete, **Then** the overdue
   indicator is removed.
2. **Given** an overdue todo, **When** I change its due date to a future date,
   **Then** the overdue indicator is removed.
3. **Given** a non-overdue todo with a future due date, **When** I change its due
   date to a past date, **Then** the overdue indicator appears.

---

### Edge Cases

- A due date exactly on the current local date is not considered overdue.
- A todo without a due date is never marked overdue.
- If the system date changes (e.g., user timezone or clock changes), overdue
  status reflects the current local date on next list render.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST determine overdue status for an incomplete todo
  whose due date is before the current local date.
- **FR-002**: The system MUST visually distinguish overdue todos in the list
  using a consistent indicator or styling.
- **FR-003**: The system MUST NOT mark a todo as overdue if it is completed or
  if no due date is set.
- **FR-004**: The system MUST update the overdue indicator immediately after a
  todo is created, edited, or marked complete.
- **FR-005**: The overdue indicator MUST remain readable and distinguishable in
  both light and dark modes, maintaining accessibility basics.
- **FR-006**: The system MUST NOT change the existing ordering or introduce new
  filtering when showing overdue indicators.

### Out of Scope *(mandatory)*

- Notifications, reminders, or alerts for overdue items.
- Search, filtering, bulk actions, or sorting changes based on overdue status.
- Multi-user support or authentication changes.
- Mobile-specific UI redesigns.

### Key Entities *(include if feature involves data)*

- **Todo Item**: Existing task with title, due date (optional), completion
  status, and creation timestamp.
- **Overdue Status**: Derived state indicating an incomplete todo with a due date
  before the current local date.

### Assumptions

- Due dates are interpreted as date-only values and compared to the current
  local date.
- Overdue status is derived on display and does not require new persisted data.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of incomplete todos with a due date before the current local
  date are visually marked overdue in the list.
- **SC-002**: 0% of completed todos or todos without due dates are marked
  overdue.
- **SC-003**: Overdue indicators update within 1 second of a due date or
  completion change.
- **SC-004**: In a usability check with a list of 10 mixed items, at least 90%
  of users identify all overdue items within 30 seconds.
