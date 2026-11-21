import { NavLink } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <section className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-md">
            <span className="text-lg font-bold">D</span>
          </div>

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-bold text-base-content sm:text-xl">
              Personal Diary
            </h1>
            <p className="text-xs text-base-content/60 sm:text-sm">
              Capture your days
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <NavLink to={"/"}>
            <Button label="Home" />
          </NavLink>
          <NavLink to={"/entry"}>
            <Button label="Add" />
          </NavLink>
        </nav>
      </header>
    </section>
  );
};

export default Header;
