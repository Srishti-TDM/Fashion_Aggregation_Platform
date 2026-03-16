import { scrapeHM } from "./scrapers/hmScraper";

async function run() {
  console.log("Fashion Aggregator Scraper Starting...");

  const products = await scrapeHM();

  console.log("Products scraped:", products.length);
  console.log(products);
}

run();