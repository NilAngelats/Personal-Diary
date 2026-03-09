const Card = ({ title, description, image, date }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-52 w-full overflow-hidden bg-base-200">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="space-y-3 px-5 py-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-base-content">{title}</h2>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {date}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-base-content/75">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Card;
