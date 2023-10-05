
import { useEffect, useState } from 'react';
import axios from 'axios';
import {ProductDto} from './../redux/types';
import { ResponseModel } from './../redux/types';

function useData() {
  const [data, setData] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5221/api/Products/randomList') 
      .then((response) => {
        const responseModel = response.data as ResponseModel<ProductDto[]>;
        if (responseModel.success) {
          const productsWithImages = responseModel.data.map((product) => {
            const imageSrc = product.Images
              ? `data:image/jpeg;base64,${btoa(String.fromCharCode(...Array.from(new Uint8Array(product.Images))))}`
              : null;
            return {
              ...product,
              imageSrc: imageSrc,
            };
          });
          setData(productsWithImages);
        } else {
          setError(responseModel.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  return { data, loading, error };
}

export default useData;
