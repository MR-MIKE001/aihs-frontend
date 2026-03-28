import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../button/Button";
import usePageChange from "../../../zustand/pageChange";
import logo from "../../assets/ahis_logo.png";
function Nav() {
  const location = useLocation();
  const { changePage, page } = usePageChange();
  const [open, setOpen] = useState(false);

  const handleNavClick = (nextPage) => {
    changePage(nextPage);
    setOpen(false);
  };

  const isActive = (routePage) =>
    page === routePage ||
    (routePage === "home" && location.pathname === "/");

  return (
    <nav className="bg-[linear-gradient(45deg,_#ffffff_0%,_#ffffff_85%,_#eef7ff_85%,_#eef7ff_100%)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="AHIS Logo"
            className="h-10 w-16"
          />
        </div>

        <div className="hidden items-center gap-6 rounded-2xl bg-[#eef7ff] px-15 py-3 text-sm font-semibold md:flex">
          <Link
            to="/"
            className={`text-[#a49d9d] hover:text-[#280f75] ${
              isActive("home") ? "text-[#450bf5]" : ""
            }`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-[#a49d9d] hover:text-[#280f75] ${
              isActive("about") ? "text-[#450bf5]" : ""
            }`}
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
          <Link
            to="/program"
            className={`text-[#a49d9d] hover:text-[#280f75] ${
              isActive("program") ? "text-[#450bf5]" : ""
            }`}
            onClick={() => handleNavClick("program")}
          >
            Program
          </Link>
        </div>
        <div className="hidden md:block">
  <Button buttonText="Register Now" buttonType="primary" />
</div>

        
        <button
          className="inline-flex items-center rounded md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-[#eef7ff] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-semibold">
            <Link
              to="/"
              className="py-1 text-[#a49d9d] hover:text-[#280f75]"
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-1 text-[#a49d9d] hover:text-[#280f75]"
              onClick={() => handleNavClick("about")}
            >
              About
            </Link>
            <Link
              to="/dashboard"
              className="py-1 text-[#a49d9d] hover:text-[#280f75]"
              onClick={() => handleNavClick("dashboard")}
            >
              Dashboard
            </Link>

            <button
              className="mt-2 w-full rounded-2xl bg-[#280f75] px-4 py-2 text-sm font-semibold text-white hover:bg-[#280f75]/80"
              onClick={() => setOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
