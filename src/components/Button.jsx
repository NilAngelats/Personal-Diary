const Button = ({ label, active = false }) => {
  return (
    <button
      className={`
      rounded-xl
      px-4
      py-2
      text-sm
      font-medium
      transition
      hover:cursor-pointer
      ${
        active
          ? "bg-blue-100 text-blue-700"
          : "bg-base-200 text-base-content hover:bg-blue-100 hover:text-blue-700"
      }
      `}
    >
      {label}
    </button>
  );
};

export default Button;
