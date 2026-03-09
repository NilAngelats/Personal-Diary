import { EntriesContext } from "./DailyEntriesContext";
import { useState } from "react";

const entriesViewsInitial = {
  today: [],
  week: [],
  month: [],
  all: [],
};

const DailyEntriesContextProvider = ({ children }) => {
  const [entriesViews, setEntriesViews] = useState(entriesViewsInitial);
  const [entries, setEntries] = useState(() => {
    return localStorage.getItem("entries") ?? [];
  });

  const splittingEntries = () => {
    if (entries.length === 0) return;
    return splittingEntries(entries);
  };

  return (
    <EntriesContext value={{ entries, setEntries, entriesViews }}>
      {children}
    </EntriesContext>
  );
};

export default DailyEntriesContextProvider;

export function useEntries() {
  return use(EntriesContext);
}
