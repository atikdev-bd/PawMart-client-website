import React from "react";
import { Link } from "react-router";

const CategoryFilteredBySmall = () => {
  const categories = [
    {
      name: "Pets (Adoption)",
      icon: "🐾",
      slug: "Pets",
      desc: "Find your perfect companion",
    },
    {
      name: "Pet Foods",
      icon: "🍖",
      slug: "Foods",
      desc: "Healthy & nutritious food",
    },
    {
      name: "Accessories",
      icon: "🦴",
      slug: "Accessories",
      desc: "Toys, collars & more",
    },
    {
      name: "Pet Care Products",
      icon: "🧴",
      slug: "Care products",
      desc: "Care & hygiene essentials",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10 ">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/category-filtered-product/${cat.slug}`}
          className="group bg-linear-to-r from-blue-100 to-green-100  rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex justify-center items-center">
            <div className="text-5xl ">{cat.icon}</div>

            <div>
              <h3 className="text-xl font-semibold  group-hover:text-blue-600">
                {cat.name}
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilteredBySmall;
