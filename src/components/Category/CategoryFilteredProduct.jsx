import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import CategoryFilteredBySmall from "./CategoryFilteredBySmall";

const CategoryFilteredProduct = () => {
  const { category } = useParams();

  const axiosInstance = useAxios();

  const [categoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/category-filtered-product?category=${category}`)
      .then((data) => {
        setCategoryProduct(data.data);
      })
      .catch(() => {
        // console.log(error);
      });
  }, [axiosInstance, category]);

  return (
    <div className="">
      <CategoryFilteredBySmall></CategoryFilteredBySmall>
      <h2 className=" text-blue-400 p-2 text-2xl">Browse by categories</h2>
      <div>
        {categoryProduct.length === 0 ? (
          <h2>There are no categories items </h2>
        ) : (
          <>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProduct.map((item) => (
                <div
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
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      📍 {item.location}
                    </p>

                    {/* Price */}
                    <p className="text-xl font-bold text-blue-600">
                      {item.category === "Pets" || item.price === 0
                        ? "Free for Adoption"
                        : `৳${item.price}`}
                    </p>

                    {/* Button */}
                    <Link
                      to={`/productDetails/${item._id}`}
                      className="inline-block w-full text-center mt-3 bg-linear-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-gray-800 py-2 rounded-lg font-semibold transition"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryFilteredProduct;
