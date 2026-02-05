# Data Model: Support for Overdue Todo Items

## Entities

### Todo

- **id**: integer, primary key, auto-increment
- **title**: string, required, max 255 characters
- **dueDate**: string (YYYY-MM-DD), optional
- **completed**: integer (0 or 1), default 0
- **createdAt**: timestamp (ISO 8601 string)

### OverdueStatus (derived)

- **isOverdue**: boolean derived from `dueDate` and `completed`

## Relationships

- None (single entity feature)

## Validation Rules

- `title` is required and must be a non-empty string.
- `title` length must be <= 255 characters.
- `dueDate` is optional; if present, must be a valid date string in
  YYYY-MM-DD format.

## Derived Logic

- `isOverdue` is true when:
  - `completed` is 0, and
  - `dueDate` is set, and
  - `dueDate` is before the current client local date.
- `isOverdue` is false otherwise.

## State Transitions

- **Create**: `completed` defaults to 0; `dueDate` optional.
- **Toggle completion**: `completed` flips between 0 and 1.
- **Edit**: `title` and/or `dueDate` can change; `isOverdue` recalculates on
  render.
- **Delete**: removes the todo.
