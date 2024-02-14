import {Skeleton} from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Scraping results!</h1>
      <h2 className="mb-5 text-gray-400">We won&apos;t be long...</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <Skeleton className="w-[300px] h-[400px] bg-gray-200" />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200" />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200" />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200 " />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200 " />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200 " />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200 " />
        <Skeleton className="w-[300px] h-[400px] bg-gray-200 " />
      </div>
    </div>
  );
}

export default Loading;
