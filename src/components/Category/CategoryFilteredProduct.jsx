import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Category from "./Category";
import useAxios from "../../Hooks/useAxios";

const CategoryFilteredProduct = () => {
  const { category } = useParams();
  console.log(typeof category);
  const axiosInstance = useAxios();
  console.log(category);

  const [categoryProduct, setCategoryProduct] = useState([]);
  console.log(categoryProduct);

  useEffect(() => {
    axiosInstance
      .get(`/category-filtered-product?category=${category}`)
      .then((data) => {
        console.log(data.data);
        console.log(data.data);
        setCategoryProduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance, category]);

  return (
    <div className="">
      <Category></Category>

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
                      className="inline-block w-full text-center mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 rounded-lg font-semibold transition"
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
