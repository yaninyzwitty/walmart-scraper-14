import fetchProduct from "@/lib/fetch-product";
import Image from "next/image";
import {notFound} from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Badge} from "@/components/ui/badge";
import AddToCart from "@/components/add-to-cart";

export default async function ProductPage({
  searchParams: {url},
}: {
  searchParams: {url: string};
}) {
  const product = await fetchProduct(url);

  if (!product) return notFound();
  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product.images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt={product.title + " " + idx}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    key={image}
                    src={image}
                    alt={product.title + " " + i}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col mb-20 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="space-x-2">
          {product.breadcrumbs.map((breadcrumb, i) => (
            <Badge
              key={breadcrumb + i}
              className={breadcrumb}
              variant="outline"
            >
              {breadcrumb}
            </Badge>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{__html: product.description}}
          className="py-10"
        />

        {product.rating && (
          <p className="text-yellow-500 text-sm">
            {product.rating.rating} ★
            <span className="text-gray-400 ml-2">
              ({product.rating.count} reviews)
            </span>
          </p>
        )}
        <p className="text-2xl font-bold mt-2">
          {product?.currency} {product.price}
        </p>

        {/* add to cart */}
        <AddToCart product={product} />
        <hr />

        <h3 className="font-bold text-xl pt-10 ">Specifications</h3>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Specifications</TableHead>
              <TableHead>Header</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.specifications.map((specification, i) => (
              <TableRow key={specification.key}>
                <TableCell className="font-medium">
                  {specification.value}
                </TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
