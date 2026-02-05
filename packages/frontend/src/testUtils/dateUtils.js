export const setMockDate = (isoDate) => {
  const date = new Date(isoDate);
  jest.useFakeTimers();
  jest.setSystemTime(date);
};

export const resetMockDate = () => {
  jest.useRealTimers();
};
