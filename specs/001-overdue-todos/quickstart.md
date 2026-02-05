# Quickstart: Support for Overdue Todo Items

## Prerequisites

- Node.js 16+
- npm 7+

## Setup

```bash
npm install
```

## Run the app

```bash
npm run start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3030

## Validate the feature

1. Create a new todo with a due date set to yesterday.
2. Confirm the todo shows a red, text-only "Overdue" badge next to the due date.
3. Edit the todo due date to today and confirm the badge disappears.
4. Edit the due date to a past date and confirm the badge returns.
5. Mark the todo complete and confirm the badge disappears.

## Run tests

```bash
npm test
```
