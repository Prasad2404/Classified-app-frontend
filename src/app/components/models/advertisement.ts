import { Category } from './category';
import { User } from './user';

export interface Advertisement {
  id: string;
  title: string;
  category?: Category;
  location: string;
  price: number;
  description: string;
  user?: User;
  status: boolean;
  postDateTime: string;
}
