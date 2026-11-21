import Button from "../components/Button";

const AddEntry = () => {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">
        <div className="border-b border-base-300 px-6 py-5 sm:px-8">
          <p className="text-sm font-medium text-primary">New diary entry</p>
          <h1 className="mt-1 text-2xl font-bold text-base-content sm:text-3xl">
            Create a new entry
          </h1>
          <p className="mt-2 text-sm text-base-content/70">
            Add a title, a short description, and an image URL for your diary
            card.
          </p>
        </div>

        <form className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-semibold text-base-content"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="A beautiful day in Hamburg"
              className="w-full rounded-2xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content outline-none transition placeholder:text-base-content/40 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-base-content"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              placeholder="Write a few lines about your day..."
              className="w-full resize-none rounded-2xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content outline-none transition placeholder:text-base-content/40 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="image"
              className="text-sm font-semibold text-base-content"
            >
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-2xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content outline-none transition placeholder:text-base-content/40 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
            <p className="text-xs text-base-content/60">
              Paste a valid image link to show a preview in your entry card.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-base-300 pt-4 sm:flex-row sm:justify-end">
            <Button label={"Cancel"} />

            <Button label={"Save entry"} active />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntry;
