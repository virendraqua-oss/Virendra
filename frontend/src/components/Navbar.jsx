import React from "react";
import { Link, NavLink } from "react-router-dom";
import siteConfig from "../config/siteConfig.js";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

const navLinkClasses =
  "rounded-lg px-4 py-2 text-sm font-medium text-base-content/80 transition hover:bg-primary/10 hover:text-primary aria-[current=page]:bg-primary/15 aria-[current=page]:text-primary";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 backdrop-blur">
      <div className="navbar max-w-6xl mx-auto px-4">
        <div className="navbar-start w-full lg:w-auto lg:mr-auto">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-60 gap-1 [--menu-active-bg:color-mix(in_oklab,var(--color-primary)_16%,transparent)] [--menu-active-fg:var(--color-primary)]"
            >
              {navLinks.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={`${navLinkClasses} capitalize`}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="flex flex-1 items-center justify-center gap-3 text-center font-bold text-xl lg:flex-none lg:justify-start lg:text-left"
          >
            <div className="h-25 w-25 shrink-0">
              <img
                src="/Logo.png"
                alt={`${siteConfig.company.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="flex flex-col leading-tight">
              <span>{siteConfig.company.name}</span>
              <span className="text-sm text-base-content/70 font-medium">
                {siteConfig.company.tagline}
              </span>
            </span>
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium [--menu-active-bg:color-mix(in_oklab,var(--color-primary)_16%,transparent)] [--menu-active-fg:var(--color-primary)]">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
