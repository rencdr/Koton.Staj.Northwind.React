

import { useEffect, useState } from 'react';
import axios from 'axios';
import {ProductDto} from './../redux/types';
import { ResponseModel } from './../redux/types';

function useData() {
  const [data, setData] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Axios ile verileri çek
    axios.get('http://localhost:5221/api/Products/randomList') 
      .then((response) => {
        const responseModel = response.data as ResponseModel<ProductDto[]>;
        if (responseModel.success) {
          setData(responseModel.data);
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
