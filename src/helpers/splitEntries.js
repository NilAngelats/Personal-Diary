export const splitEntries = (entries) => {
  const today = new Date();

  /** Setting the startOfWeek on Sunday */
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  /** Setting the endOfWeek on next Sunday */
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  const result = {
    today: [],
    week: [],
    month: [],
    all: [...entries],
  };

  entries.forEach((entry) => {
    const entryDate = new Date(entry.date);

    if (entryDate.toDateString() === today.toDateString()) {
      result.today.push(entry);
    }

    if (entryDate >= startOfWeek && entryDate < endOfWeek) {
      result.week.push(entry);
    }

    if (
      entryDate.getMonth() === today.getMonth() &&
      entryDate.getFullYear() === today.getFullYear()
    ) {
      result.month.push(entry);
    }
  });

  return result;
};
