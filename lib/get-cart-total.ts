import { Product } from "@/typings/product-typings";

export default function getCartProducts(products: Product[]): string {
    const total = products.reduce((acc: number, current:Product) => {
        return acc + current.price
    }, 0);


    return `${products?.[0]?.currency ? products[0]?.currency : '$'} ${total.toFixed(2)}`;
  
}
