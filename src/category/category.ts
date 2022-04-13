import { Card } from "./card";

export interface Category {
  id?:number;
  category: string;
  "category-image": string;
  cards: Card [];
}

