export const toLocalDateStart = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const parseLocalDate = (dateString) => {
  if (!dateString) {
    return null;
  }

  const parts = dateString.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    return null;
  }

  const [year, month, day] = parts;
  return new Date(year, month - 1, day);
};

export const isOverdue = (todo, now = new Date()) => {
  if (!todo) {
    return false;
  }

  const isCompleted = todo.completed === 1 || todo.completed === true;
  if (isCompleted) {
    return false;
  }

  const dueDate = parseLocalDate(todo.dueDate);
  if (!dueDate) {
    return false;
  }

  const today = toLocalDateStart(now);
  return dueDate < today;
};
