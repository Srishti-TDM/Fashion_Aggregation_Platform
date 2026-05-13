import { seedProducts } from "./data/seedProducts";

async function run() {
  console.log("Fashion Aggregator Starting...");

  console.log("Loaded products:", seedProducts.length);
  console.log(seedProducts);
}

run();