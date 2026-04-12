import React from "react";
import { Link } from "react-router-dom";
import featuredCategories from "../../../data/featuredCategories.js";

const QuickNavigation = ({ activeCategorySlug }) => (
  <section className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-lg">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-primary/70 font-semibold">
          Quick navigation
        </p>
        <h2 className="mt-2 text-2xl font-bold text-base-content">
          Browse products by category
        </h2>
      </div>
      <Link
        to="/products"
        className="btn btn-ghost btn-sm justify-start md:justify-center"
      >
        View full catalogue
      </Link>
    </div>
    <div className="mt-5 flex flex-wrap gap-3">
      {featuredCategories.map((category) => {
        const isActive = category.slug === activeCategorySlug;

        return (
          <Link
            key={category.slug}
            to={`/products/${category.slug}`}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "border-primary bg-primary !text-white hover:!text-white"
                : "border-base-200 bg-base-100 text-base-content/80 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  </section>
);

export default QuickNavigation;
