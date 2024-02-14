import GridOption from "@/components/GridOption";
import React from "react";

function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 p-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-zinc-200 h-full md:h-32"
        />
        <GridOption
          title="Shop wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-zinc-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-pink-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All you need for Match Day"
          image="https://links.papareact.com/m8e"
          className="bg-red-100  col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100  h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100  h-64"
        />
        <GridOption
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100  h-64"
        />
        <GridOption
          title="Enjoy free shipping"
          image="https://links.papareact.com/9fh"
          className="bg-blue-100  h-64"
        />
        <GridOption
          title="Flash Deals"
          image="https://links.papareact.com/qx7"
          className="bg-orange-100 col-span-2  h-64"
        />
      </div>
    </main>
  );
}

export default Home;
