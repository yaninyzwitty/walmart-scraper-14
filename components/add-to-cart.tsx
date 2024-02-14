"use client";
import useCartStore from "@/store";
import {Product} from "@/typings/product-typings";
import {useEffect, useState} from "react";
import {Button} from "./ui/button";
import RemoveFromCart from "./remove-from-cart";

function AddToCart({product}: {product: Product}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {cart, addToCart} = useCartStore();

  const howManyInCart = cart.filter(
    (p) => p.meta.sku === product.meta.sku
  ).length;

  const handleAdd = () => {
    addToCart(product);
  };

  console.log(`howManyInCart`, howManyInCart);

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />

        <p></p>

        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }

  if (!isMounted) return null;

  return <Button onClick={handleAdd}>Add to cart</Button>;
}

export default AddToCart;
