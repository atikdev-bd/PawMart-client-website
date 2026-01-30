import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PetsAndSupplies = () => {
  const [filtered, setFiltered] = useState([]);
  const [allListings, setAllListings] = useState([]);
  const axiosInstance = useAxios();

  useLayoutEffect(() => {
    axiosInstance
      .get("/allProducts")
      .then((data) => {
        setFiltered(data.data);
        setAllListings(data.data);
      })

      .catch(() => {
        // console.log(err);
      });
  }, [axiosInstance]);

  const handleCategoryFilter = (category) => {
    if (category === "All") {
      setFiltered(allListings);
    } else {
      const result = allListings.filter((item) => item.category === category);
      setFiltered(result);
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold">All Listings</h2>

          {/* Category Filter */}
          <select
            onClick={(e) => handleCategoryFilter(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="All">All Categories</option>
            <option value="Pets">Pets</option>
            <option value="Foods">Foods</option>
            <option value="Accessories">Accessories</option>
            <option value="Care products">Care Products</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-gray-500">No listings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                key={item._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-[#3F9AAE] hover:bg-[#3c7986] text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">📍 {item.location}</p>

                  <p className="text-xl font-bold text-blue-400">
                    {item.category === "Pets" || item.price === 0
                      ? "Free for Adoption"
                      : `৳${item.price}`}
                  </p>

                  <Link
                    to={`/productDetails/${item._id}`}
                    className="inline-block w-full text-center mt-3 bg-linear-to-r from-green-300 to-blue-300 hover:from-blue-400 hover:to-green-400 text-gray-800 py-2 rounded-lg font-semibold transition"
                  >
                    See Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
