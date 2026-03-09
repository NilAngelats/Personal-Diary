import { splitEntries } from "../helpers/splitEntries";
import { EntriesContext } from "./DailyEntriesContext";
import { useState } from "react";

const initialEntry = {
  today: [],
  week: [],
  month: [],
  all: [],
};

const DailyEntriesContextProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    const localStorageEntries = localStorage.getItem("entries") ?? [];

    if (localStorageEntries.length === 0) return initialEntry;

    return splitEntries(localStorageEntries);
  });

  return (
    <EntriesContext value={{ entries, setEntries }}>{children}</EntriesContext>
  );
};

export default DailyEntriesContextProvider;

export function useEntries() {
  return use(EntriesContext);
}
