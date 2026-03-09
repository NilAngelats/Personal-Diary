/**
 * Splits an array of journal entries into different time categories.
 *
 * The function receives an array of entry objects and classifies them
 * depending on their date relative to the current day.
 *
 * @param {Array<Object>} entries - Array of entry objects.
 * Each entry should contain at least a `date` property that can be parsed by `new Date()`.
 *
 * Example entry:
 * {
 *   id: string,
 *   title: string,
 *   image: string,
 *   description: string,
 *   date: string
 * }
 *
 * @returns {Object} An object containing the entries grouped by time period:
 *
 * {
 *   today: Array<Object>,  // Entries created today
 *   week: Array<Object>,   // Entries created during the current week
 *   month: Array<Object>,  // Entries created during the current month
 *   all: Array<Object>     // Copy of all entries
 * }
 */

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
