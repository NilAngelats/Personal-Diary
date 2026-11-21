import { Link } from "react-router";
import Button from "../components/Button";

const NoMoreEntries = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">
        <div className="flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-14">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl shadow-sm">
            📔
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Daily limit reached
          </p>

          <h1 className="mt-2 text-2xl font-bold text-base-content sm:text-3xl">
            You already created an entry for today
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-base-content/70 sm:text-base">
            This diary allows only one entry per day, so you cannot add another
            one right now. Come back tomorrow to write about your next day.
          </p>

          <div className="mt-8 w-full rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-left">
            <p className="text-sm font-semibold text-blue-700">Why?</p>
            <p className="mt-1 text-sm leading-6 text-blue-900/80">
              Keeping one entry per day makes your diary cleaner, more focused,
              and easier to review later.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={"/"}>
              <Button label={"View entries"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoMoreEntries;
