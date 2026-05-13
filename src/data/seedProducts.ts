import { Product } from "../models/product";

export const seedProducts: Product[] = [
  {
    product_id: "1",
    brand: "Zara",
    product_name: "Flowy Midi Dress",
    price: 69.9,
    image_url: "",
    product_url: "https://zara.com/product/1",
    category: "dresses",
    color: "black",
    sizes: ["S", "M", "L"],
  },
  {
    product_id: "2",
    brand: "H&M",
    product_name: "Knit Sweater Dress",
    price: 39.99,
    image_url: "",
    product_url: "https://hm.com/product/2",
    category: "dresses",
    color: "beige",
    sizes: ["XS", "S", "M"],
  },
  {
    product_id: "3",
    brand: "Uniqlo",
    product_name: "Cotton Shirt Dress",
    price: 49.9,
    image_url: "",
    product_url: "https://uniqlo.com/product/3",
    category: "dresses",
    color: "blue",
    sizes: ["S", "M", "L"],
  },
];