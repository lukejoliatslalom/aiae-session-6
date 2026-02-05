import { isOverdue, parseLocalDate, toLocalDateStart } from '../dateUtils';
import { resetMockDate, setMockDate } from '../../testUtils/dateUtils';

describe('dateUtils', () => {
  afterEach(() => {
    resetMockDate();
  });

  test('parseLocalDate returns null for empty input', () => {
    expect(parseLocalDate(null)).toBeNull();
    expect(parseLocalDate('')).toBeNull();
  });

  test('parseLocalDate returns a local date for YYYY-MM-DD', () => {
    const date = parseLocalDate('2026-02-05');
    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(1);
    expect(date.getDate()).toBe(5);
  });

  test('toLocalDateStart strips time from a date', () => {
    const date = new Date(2026, 1, 5, 15, 30, 20);
    const start = toLocalDateStart(date);
    expect(start.getFullYear()).toBe(2026);
    expect(start.getMonth()).toBe(1);
    expect(start.getDate()).toBe(5);
    expect(start.getHours()).toBe(0);
    expect(start.getMinutes()).toBe(0);
  });

  test('isOverdue returns true for past due incomplete todos', () => {
    setMockDate('2026-02-05T12:00:00');
    const todo = { dueDate: '2026-02-01', completed: 0 };
    expect(isOverdue(todo)).toBe(true);
  });

  test('isOverdue returns false for due today todos', () => {
    setMockDate('2026-02-05T12:00:00');
    const todo = { dueDate: '2026-02-05', completed: 0 };
    expect(isOverdue(todo)).toBe(false);
  });

  test('isOverdue returns false for completed todos', () => {
    setMockDate('2026-02-05T12:00:00');
    const todo = { dueDate: '2026-02-01', completed: 1 };
    expect(isOverdue(todo)).toBe(false);
  });

  test('isOverdue returns false when no due date', () => {
    setMockDate('2026-02-05T12:00:00');
    const todo = { dueDate: null, completed: 0 };
    expect(isOverdue(todo)).toBe(false);
  });
});
