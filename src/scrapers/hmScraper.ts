import axios from "axios";
import { Product } from "../models/product";

const BASE_URL = "https://app.retailed.io/api/v1/scraper/h&m";

export async function scrapeHM(): Promise<Product[]> {
  const apiKey = process.env.RETAILED_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RETAILED_API_KEY in .env");
  }

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  };

  // Step 1: search for products
  const searchRes = await axios.get(`${BASE_URL}/search`, {
    headers,
    params: { searchQuery: "dresses" },
  });

  const results = searchRes.data?.results ?? [];

  // Step 2: fetch product details for a small sample first
  const detailResponses = await Promise.all(
    results.slice(0, 10).map((item: any) =>
      axios.get(`${BASE_URL}/product`, {
        headers,
        params: { productId: item.productId },
      })
    )
  );

  const products: Product[] = detailResponses.map((res) => {
    const item = res.data;
    return {
      product_id: item.productId ?? "",
      brand: "H&M",
      product_name: item.name ?? "Unknown Product",
      price: Number(String(item.price ?? "0").replace(/[^0-9.]/g, "")),
      image_url: item.imageUrl ?? "",
      product_url: item.url ?? "",
      category: item.category ?? undefined,
      color: item.color ?? undefined,
      sizes: item.sizes ?? [],
    };
  });

  return products;
}