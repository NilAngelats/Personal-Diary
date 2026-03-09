import { useEntries } from "../context/DailyEntriesContextProvider";
import AddEntry from "./AddEntry";
import NoMoreEntries from "./NoMoreEntries";

const AddPage = () => {
  const { entries } = useEntries();

  const hasEntryToday = entries.today.length > 0;

  return hasEntryToday ? <NoMoreEntries /> : <AddEntry />;
};

export default AddPage;
