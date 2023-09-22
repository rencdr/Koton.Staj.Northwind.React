// redux/reducers/ProductReducer.ts

import { Product } from '../types'; // Özelleştirilmiş bir Product türü
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/ProductActions';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

type ProductAction = { type: string; payload: Product[] | string };

const productReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload as Product[],
        loading: false,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    default:
      return state;
  }
};

export default productReducer;
