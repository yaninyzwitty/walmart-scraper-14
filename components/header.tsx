"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import {useRouter} from "next/navigation";
import useCartStore from "@/store";
import getCartProducts from "@/lib/get-cart-total";

function Header() {
  const router = useRouter();
  const {cart} = useCartStore();

  const total = getCartProducts(cart);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;

    router.push(`/search?q=${input}`);
  };
  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 items-center space-x-5">
      <Link href={"/"} className="mb-5 md:mb-0">
        <Image
          src={`https://i.imgur.com/5V4wehM.png`}
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>

      <form
        className="flex items-center bg-white rounded-full w-full   flex-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
        />
        <button
          type="submit"
          className="rounded-full h-10 px-2 w-10 bg-yellow-500 cursor-pointer"
        >
          <Search className="rounded-full w-10" />
        </button>
      </form>

      <div className="flex space-x-5 p-5 pb-0 md:p-0 ">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <div className="flex space-x-5 mt-5 md:mt-0">
          <Link
            href={"/"}
            className="flex text-white font-bold items-center space-x-2 text-sm"
          >
            <Heart size={20} />

            <div>
              <p className="text-xs font-extralight">Reorder</p>
              <p>My Items</p>
            </div>
          </Link>
          <Link
            href={"/"}
            className=" flex text-white font-bold items-center space-x-2 text-sm"
          >
            <User size={20} />

            <div>
              <p className="text-xs font-extralight">Sign in</p>
              <p>Account</p>
            </div>
          </Link>
          <Link
            href={"/basket"}
            className=" flex text-white font-bold items-center space-x-2 text-sm"
          >
            <ShoppingCart size={20} />

            <div>
              <p className="text-xs font-extralight">
                {cart.length === 0
                  ? "No items"
                  : `${cart.length} ${cart.length === 1 ? "Item" : "Items"}`}
              </p>
              <p>{cart.length === 0 ? "$0.00" : total}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
