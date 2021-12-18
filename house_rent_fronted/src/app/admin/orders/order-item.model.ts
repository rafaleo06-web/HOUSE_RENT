import { Product } from '../products/shared/product.model';

export class OrderItem {
  id: number;
  product: Product;
  price: number;
  quantity: number;
  total: number;
}
