# Research: Support for Overdue Todo Items

## Decision 1: Overdue date source

- Decision: Determine overdue status using the client local date/time, comparing
  date-only due dates against the current local date.
- Rationale: Matches the user-facing date picker and avoids backend changes.
- Alternatives considered: Server-derived date/time; configurable app timezone.

## Decision 2: Visual indicator

- Decision: Add a red, text-only "Overdue" badge next to the due date in the
  todo card.
- Rationale: Clear, compact signal that preserves layout and accessibility.
- Alternatives considered: Red due-date text with icon; left border/stripe;
  combined badge and red text.

## Decision 3: Data persistence

- Decision: Keep overdue status as derived UI state; no new persistence fields
  or API changes.
- Rationale: Overdue status depends on current date and is already derivable
  from existing todo fields.
- Alternatives considered: Persisting an explicit overdue flag; backend
  calculation on read.
