export interface Product {
  id: number;
  categoryId: number;

  name: string;
  description: string;
  price: number;
  rating: number;

  link: string;
  image: string;

  likes: number; // starts at 0
}
