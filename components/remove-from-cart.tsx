"use client";
import useCartStore from "@/store";
import {Product} from "@/typings/product-typings";
import React from "react";
import {Button} from "./ui/button";

function RemoveFromCart({product}: {product: Product}) {
  const {cart, removeFromCart} = useCartStore();

  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <Button className="bg-walmart hover:bg-walmart/50 " onClick={handleRemove}>
      -
    </Button>
  );
}

export default RemoveFromCart;
