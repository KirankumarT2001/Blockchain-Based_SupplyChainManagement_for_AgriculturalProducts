import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data.js";
import { Header, Footer, Button } from "../index.js";
import { FaRupeeSign } from "react-icons/fa";
import Timeline from "./Timeline.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice.js";
// import { Popover PopoverHandler, PopoverContent } from "@material-tailwind/react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const productId = product.id;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  if (!product) {
    return (
      <>
        <div className="min-h-screen">
          <Header />
          <div className="flex place-content-center text-9xl font-bold">
            Product not found
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />

      <div className="flex place-content-center w-full bg-[#D8F3DC]">
        <div className="grid grid-cols-2 w-5/6">
          <div>
            <img
              src="/images/feature.png"
              alt="image"
              className="bg-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center p-6 bg-gray-50 rounded-xl">
            <div className="font-bold text-2xl">{product.name}</div>
            <div>
              <div className="font-medium">Description</div>
              <div>{product.description}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-medium">Category :</div>
              <div>{product.category}</div>
            </div>
            <div className="flex items-center ">
              <div className="font-medium">Price : </div>
              <FaRupeeSign className="text-sm relative top-[1px]" />
              <div className="text-xl ">{product.price}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-medium">{product.quantity} </div>
              <div>items available</div>
            </div>

            <Button
              className="hover:bg-blue-400"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      <div class="divide-y-4 divide-zinc-500 bg-red-50">
        <div></div>
        <div></div>
      </div>
      <Timeline id={productId} delivery={true} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
