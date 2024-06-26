import React from "react";
import { products } from "../data.js";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { Header, Footer } from "../index.js";

const ProductList = () => {
  return (
    <>
      <div className="bg-[#D8F3DC]">
        <Header />

        <div className="h-96 overflow-y-hidden z-10 relative shadow-lg shadow-black">
          <img
            src="images/AAA.jpg"
            alt="BG"
            className="z-10 absolute blur-sm h-96 w-screen"
          />
          <div className="absolute z-30 font-bold text-9xl flex w-full h-full justify-center items-center text-white -mt-8">
            Products
          </div>
        </div>
        <div className="columns-4 gap-5 p-6 z-20 relativ mt-9">
          {/* here starts the products */}
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white break-inside-avoid h-fit hover:shadow-xl hover:shadow-green-400 flex flex-col border-2 border-black rounded-3xl my-4"
            >
              <Link to={`/productDetails/${product.id}`}>
                <div className="h-1/2 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt="image"
                    className="bg-cover hover:scale-110 transition rounded-3xl"
                  />
                </div>

                <div className=" h-fit w-full flex flex-col m-2">
                  <div className="">{product.image}</div>
                  <div className="font-bold p-2">{product.name}</div>
                  <div className="p-2"> {product.description}</div>
                  <div className="p-2">{product.quantity}</div>
                  <div className="p-2 flex items-center flex-row">
                    <FaRupeeSign className="text-sm" />
                    <div className="text-lg"> {product.price}</div>

                    <div>
                      <button className="bg-blue-400 rounded-2xl">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductList;
