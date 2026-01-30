import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useAuth } from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddListing = () => {
  const [formData, setFormData] = useState({});
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const handleSubmitListing = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.category === "Pets") {
      data.price = 0;
    }

    setFormData(data);

    axiosInstance
      .post("/listings", data)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })

      .catch(() => {
        // console.log(error);
      });
  };

  return (
    <div>
      <div className="p-6">
        <div className="max-w-2xl  mx-auto p-6 bg-linear-to-r from-blue-100 to-green-100 shadow rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Add New Product / Pet</h2>

          <form onSubmit={handleSubmitListing} className="space-y-4">
            {/* Product/Pet Name */}
            <div>
              <label className="block font-medium mb-1">
                Product / Pet Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border bg-white rounded-lg p-2"
                placeholder="Enter name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-1">Category</label>
              <select name="category" className="w-full border rounded-lg p-2">
                <option value="Pets">Pets</option>
                <option value="Foods">Foods</option>
                <option value="Accessories">Accessories</option>
                <option value="Care products">Care Products</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                min="0"
                // onChange={handleChange}
                // disabled={formData.category === "Pets"}
                className="w-full border rounded-lg p-2 bg-gray-100"
                placeholder="Enter price"
              />
              {formData?.category === "Pets" && (
                <p className="text-sm text-gray-500">
                  For Pets, price is set to 0
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                className="w-full border rounded-lg p-2"
                placeholder="Enter location"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                type="text"
                name="description"
                rows="4"
                className="w-full border rounded-lg p-2"
                placeholder="Enter description"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block font-medium mb-1">Image URL</label>
              <input
                type="url"
                name="image"
                className="w-full border rounded-lg p-2"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Pick Up Date */}
            <div>
              <label className="block font-medium mb-1">Pick Up Date</label>
              <input
                type="date"
                name="date"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Email (Readonly) */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="w-full border rounded-lg p-2 bg-gray-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
