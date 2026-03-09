import { useState } from "react";
import Button from "../components/Button";
import { useEntries } from "../context/DailyEntriesContextProvider";
import Card from "../components/Card";

const HomePage = () => {
  const [view, setView] = useState("today");
  const { entries } = useEntries();
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">
          <div className="border-b border-base-300 px-6 py-5 sm:px-8">
            <p className="text-sm font-medium text-primary">Your diary</p>
            <h1 className="mt-1 text-2xl font-bold text-base-content sm:text-3xl">
              Explore your entries
            </h1>
            <p className="mt-2 text-sm text-base-content/70">
              Check your memories by day, week, month, or browse all your
              entries.
            </p>
          </div>

          <div className="px-6 py-5 sm:px-8">
            <div className="flex flex-wrap gap-3">
              <Button
                label={"Today"}
                active={view === "today"}
                onClick={() => setView("today")}
              />
              <Button
                label={"Week"}
                active={view === "week"}
                onClick={() => setView("week")}
              />
              <Button
                label={"Month"}
                active={view === "month"}
                onClick={() => setView("month")}
              />
              <Button
                label={"All"}
                active={view === "all"}
                onClick={() => setView("all")}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {entries[view].map((entry) => (
            <Card key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
