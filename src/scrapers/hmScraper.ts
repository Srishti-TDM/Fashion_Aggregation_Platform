import { Product } from "../models/product";

export async function scrapeHM(): Promise<Product[]> {
  console.log("Scraping H&M products...");

  const products: Product[] = [
    {
      product_id: "123456",
      brand: "H&M",
      product_name: "Oversized Hoodie",
      price: 29.99,
      image_url: "https://example.com/image.jpg",
      product_url: "https://www2.hm.com/en_us/productpage.123456.html",
      category: "hoodies",
      color: "Black",
      sizes: ["S", "M", "L", "XL"]
    }
  ];

  return products;
}