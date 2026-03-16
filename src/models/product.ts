export interface Product {
  product_id: string;
  brand: string;
  product_name: string;
  price: number;
  image_url: string;
  product_url: string;
  category?: string;
  color?: string;
  sizes?: string[];
}