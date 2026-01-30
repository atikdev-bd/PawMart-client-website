import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router";

const Category = () => {
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
  const MotionLink = motion(Link);
  return (
    <div className=" my-20">
      <section className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-5">
          Browse by <span className="text-blue-400">Category</span>
        </h2>

        <d className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {categories.map((cat) => (
            <MotionLink
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              key={cat.slug}
              to={`/category-filtered-product/${cat.slug}`}
              className="group bg-linear-to-r from-blue-100 to-green-100  rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                {cat.name}
              </h3>

              <p className="text-sm text-gray-500">{cat.desc}</p>
            </MotionLink>
          ))}
        </d>
      </section>
    </div>
  );
};

export default Category;
