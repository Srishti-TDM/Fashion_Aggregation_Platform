import fs from "fs";
import axios from "axios";
import { Product } from "../models/product";

export async function scrapeZara(): Promise<Product[]> {
  console.log("Scraping Zara products...");

  const url = "https://www.zara.com/us/en/woman-dresses-l1066.html";

  const response = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  const html = response.data as string;
  fs.writeFileSync("zara-debug.html", html);
  console.log("Saved Zara HTML to zara-debug.html");

  // Debug helper: write HTML to a file so you can inspect what Zara actually returned
  // Uncomment if needed:
  // import fs from "fs";
  // fs.writeFileSync("zara-debug.html", html);

  const productUrlRegex = /https:\/\/www\.zara\.com\/us\/en\/[^"'\\s]+-p\d+\.html/g;
  const matches = html.match(productUrlRegex) ?? [];

  const uniqueUrls = Array.from(new Set(matches));

  const products: Product[] = uniqueUrls.map((productUrl) => {
    const idMatch = productUrl.match(/-p(\d+)\.html/);
    return {
      product_id: idMatch?.[1] ?? productUrl,
      brand: "Zara",
      product_name: "Zara Product",
      price: 0,
      image_url: "",
      product_url: productUrl,
      category: "dresses",
      color: undefined,
      sizes: [],
    };
  });

  return products;
}