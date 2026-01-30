import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useAuth } from "../../Hooks/useAuth";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyListing = () => {
  const [myListing, setMyListing] = useState([]);
  const axiosInstance = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/listings?email=${user?.email}`)
        .then((data) => {
          setMyListing(data.data);
        })

        .catch(() => {
          // console.log(error);
        });
    }
  }, [user?.email, axiosInstance]);

  const handleDeleteItem = (id) => {
    axiosInstance
      .delete(`/listings/${id}`)
      .then((result) => {
        if (result.data.deletedCount) {
          const remainingData = myListing.filter((d) => d._id !== id);
          setMyListing(remainingData);
          Swal.fire("Deleted!", "Your listing has been deleted.", "success");
        }
       
      })
      .catch(() => {
        // console.log(error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div>
        <h1 className="text-4xl text-center mt-6 font-bold mb-2 ">
          MY LISTING:
          <span className="text-[#2cd4cc]">{myListing.length}</span>
        </h1>
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-linear-to-r from-green-100 to-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                  SL No
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Seller Email
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Product Name
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Category
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Price
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y bg-linear-to-r from-blue-50 to-green-50">
              {myListing.map((item, index) => (
                <tr key={item?._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {index + 1}
                  </td>

                  {/* email */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-center font-medium text-gray-800">
                      {item?.email}
                    </p>
                  </td>

                  {/* Product */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-center font-medium text-gray-800">
                      {item?.name}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-center font-medium text-gray-800">
                      {item?.category}
                    </p>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 text-center text-sm font-medium text-gray-800">
                    {item?.price}
                  </td>
                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center flex-wrap gap-2">
                      <button
                        onClick={() => handleDeleteItem(item?._id)}
                        className="px-3 py-1 text-xs rounded border border-red-500 text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                      <button className="px-3 py-1 text-xs rounded border border-red-500 text-red-600 hover:bg-red-50">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyListing;
