import React, { useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { useAuth } from "../../Hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const [singleItemDetails, setSingleItemDetails] = useState(null);
  const currentDateTime = new Date();
  const modalRef = useRef();
  console.log(singleItemDetails);

  useLayoutEffect(() => {
    axiosInstance
      .get(`/product-details/${id}`)
      .then((result) => {
        console.log(result.data);
        setSingleItemDetails(result.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance, id]);

  const handleShowModal = () => {
    modalRef.current.showModal();
  };

  console.log(id);
  if (!singleItemDetails)
    return <p className="text-center mt-10">Loading...</p>;
  return (
    <div>
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow rounded-2xl p-6">
          {/* Image */}
          <img
            src={singleItemDetails?.image}
            alt={singleItemDetails.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />

          {/* Details */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{singleItemDetails.name}</h2>
            <p className="text-sm text-gray-500">
              Category:{" "}
              <span className="font-medium">{singleItemDetails.category}</span>
            </p>
            <p className="text-sm text-gray-500">
              Owner Email:{" "}
              <span className="font-medium">{singleItemDetails.email}</span>
            </p>

            <p className="text-gray-700">{singleItemDetails.description}</p>

            <p className="text-2xl font-bold text-blue-600">
              {singleItemDetails.category === "Pets" ||
              singleItemDetails.price === 0
                ? "Free for Adoption"
                : `৳${singleItemDetails.price}`}
            </p>

            <p className="text-gray-600">📍 {singleItemDetails.location}</p>

            <button
              //   onClick={() => setShowModal(true)}
              onClick={handleShowModal}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold"
            >
              Adopt / Order Now
            </button>
          </div>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div>
                <h1>this is good for me</h1>
              </div>
            </form>

            <div className="">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 relative">
                <h2 className="text-2xl font-bold mb-4">
                  {/* Adopt / Order: {listing.name} */}
                </h2>

                <form
                // onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Buyer Name */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="buyerName"
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Buyer Name"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Your Email
                      </label>
                      <input
                        type="text"
                        value={user?.email}
                        name="email"
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Your email"
                      />
                    </div>

                    {/* Product Name */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="ProductName"
                        value={singleItemDetails?.name}
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Product Name"
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Quantity
                      </label>
                      {singleItemDetails.category === "Pets" ? (
                        <input
                          type="number"
                          name="quantity"
                          value="1"
                          readOnly
                          className="border  w-full  p-2 rounded bg-gray-100"
                        />
                      ) : (
                        <input
                          type="number"
                          min="0"
                          name="quantity"
                          className="border  w-full  p-2 rounded bg-gray-100"
                        />
                      )}
                    </div>

                    {/* Price */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Price"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Your Address"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-sm block text-gray-600">
                        Date
                      </label>
                      <input
                        type="text"
                        name="date"
                        value={currentDateTime}
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Current Date"
                      />
                    </div>

                    <div>
                      <label className="text-sm block text-gray-600">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        readOnly
                        className="border  w-full  p-2 rounded bg-gray-100"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm block text-gray-600">Notes</label>
                    <textarea
                      name="notes"
                      className="border  p-2 w-full rounded  "
                      placeholder="Additional Notes"
                      rows="3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                  >
                    Confirm Order
                  </button>

                  {/* Notes */}
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ProductDetails;
