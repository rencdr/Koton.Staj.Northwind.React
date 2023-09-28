// redux/types.ts

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export interface RootState {
  products: Product[];
  loading: boolean;
  error: string | null;


}

export interface Product {
  productID: number;
  productName: string;
  categoryName: string;
  unitPrice: number;
  description: string;
}

export interface ProductDto {
  productID: number;
  productName: string;
  unitsInStock: number;
  categoryName: string;
  description: string;
  unitPrice: number;
}

export interface ResponseModel<T> {
  success: boolean;
  message: string;
  data: T;
}