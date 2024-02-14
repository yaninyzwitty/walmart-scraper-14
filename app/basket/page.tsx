import Basket from "@/components/basket";
import {ShoppingCartIcon} from "lucide-react";
import React from "react";

function BasketPage() {
  return (
    <div className="w-full p-10 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl font-bold">Basket</h1>
      </div>
      <p className="mt-2 mb-5">
        Review the items in yout cart and checkout when you&apos;re ready
      </p>

      <Basket />
    </div>
  );
}

export default BasketPage;
