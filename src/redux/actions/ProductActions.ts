// redux/actions/ProductActions.ts

import { Dispatch } from 'redux';
import axios from 'axios';
import { Product } from '../types'; // Özelleştirilmiş bir Product türü

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Product[]>('http://localhost:5221/api/Products/randomList');
    const products = response.data;
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error: any) { // 'error' değişkenine 'any' türünü atar
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

