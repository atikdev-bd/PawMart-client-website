import React, { useLayoutEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useAuth } from "../../Hooks/useAuth";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const [orderDetails, setOrderDetails] = useState([]);

  console.log(orderDetails);

  useLayoutEffect(() => {
    if (user) {
      axiosInstance
        .get(`/order-details?email=${user?.email}`)

        .then((result) => {
          // console.log(result.data);
          setOrderDetails(result.data);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [axiosInstance, user]);

  // download pdf

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("My Orders Report - PawMart", 14, 15);

    const tableColumn = [
      "SL No",
      "Product Name",
      "Product Category",
      "Quantity",
      "Price",
      "Address",
      "Phone",
    ];

    const tableRows = orderDetails.map((order, index) => [
      index + 1,
      order.productName,
      order.category,
      order.quantity,
      `$${order.price}`,
      order.address,
      order.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [37, 99, 235] }, // blue
    });

    doc.save("my-orders-report.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div>
        <div className="flex  justify-between items-center mx-0.5 lg:mx-2 my-2">
          <h1 className="text-xl  font-bold ">My Orders</h1>
          <button
            onClick={handleDownloadPDF}
            className=" px-2 lg:px-5 py-1 lg:py-2 bg-linear-to-r from-blue-300 to-green-300 hover:from-green-400 hover:to-blue-400 rounded-sm hover:text-white text-gray-800 transition"
          >
            📄 Download Report (PDF)
          </button>
        </div>
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="min-w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-linear-to-r from-green-100 to-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                  SL No
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Product Name
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Product Category
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Quantity
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Price
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Address
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Phone
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y bg-linear-to-r from-blue-50 to-green-50">
              {orderDetails.map((order, index) => (
                <tr key={order?._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {index + 1}
                  </td>

                  {/* email */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-center font-medium text-gray-800">
                      {order?.productName}
                    </p>
                  </td>

                  {/* Product */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-center font-medium text-gray-800">
                      {order?.category}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3">
                    <p className="text-sm text-center font-medium text-gray-800">
                      {order?.quantity}
                    </p>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 text-center text-sm font-medium text-gray-800">
                    {order?.price}
                  </td>
                  {/* Address */}
                  <td className="px-4 py-3 text-center text-sm font-medium text-gray-800">
                    {order?.address}
                  </td>
                  {/* phone */}
                  <td className="px-4 py-3 text-center text-sm font-medium text-gray-800">
                    {order?.phone}
                  </td>
                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center flex-wrap gap-2">
                      <button
                        // onClick={() => handleDeleteItem(item?._id)}
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

export default MyOrders;
