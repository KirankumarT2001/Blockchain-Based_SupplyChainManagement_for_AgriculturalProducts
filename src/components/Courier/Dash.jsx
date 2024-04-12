import React, { useState } from "react";
import { cropRegistration } from "../data";
import { Header, Footer } from "../index";

const Dash = () => {
  const [pickup, setPickup] = useState({});
  const [delivery, setDelivery] = useState({});

  const handleApproval = (productId) => {
    if (!pickup[productId] || pickup[productId] !== "PickedUp") {
      setPickup((prevStatus) => ({
        ...prevStatus,
        [productId]: "PickedUp",
      }));
    }
  };

  const handleDelivery = (productId) => {
    if (!delivery[productId] || delivery[productId] !== "Delivery") {
      setDelivery((prevStatus) => ({
        ...prevStatus,
        [productId]: "Delivered",
      }));
    }
  };

  return (
    <>
      <Header />
      <img
        src="/images/Bg.jpg"
        className="w-full h-full blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative  ">
        <div className="font-bold text-6xl mb-7 underline ">
          Delivery Details
        </div>
        <table className="w-full mx-2 h-auto rounded-lg overflow-hidden bg-slate-950 ">
          <thead className="text-white text-md bg-green-400 border-green-800 border-2 h-12">
            <tr className="bg-slate-600">
              <th>ID</th>
              <th>Farmer Name</th>
              <th>Crop Name</th>
              <th>Address</th>
              <th>Item weigth in Quintal</th>
              <th>Pick Up</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {cropRegistration.map((product) => (
              <tr
                key={product.id}
                className="border-2 border-green-800 hover:bg-red-200"
              >
                <td>{product.id}</td>
                <td>{product.farmerName}</td>
                <td>{product.CropName}</td>
                <td>{product.landAddress}</td>

                <td>{product.ExpectedYield}</td>
                <td className="gap-2 flex">
                  <button
                    onClick={() => handleApproval(product.id)}
                    className={`${
                      pickup[product.id] === "PickedUp"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } rounded-lg my-2 p-2`}
                    disabled={pickup[product.id] === "PickedUp"}
                  >
                    {pickup[product.id] === "PickedUp" ? "PickedUp" : "PickUp"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelivery(product.id)}
                    className={`${
                      delivery[product.id] === "Delivered"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } rounded-lg my-2 p-2`}
                    disabled={delivery[product.id] === "Delivered"}
                  >
                    {delivery[product.id] === "Delivered"
                      ? "Delivered"
                      : "Delivery"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dash;
