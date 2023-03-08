import { useEffect, useState } from 'react';
import RatesService from '../services/rates.service';

const useRates = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRates();
  }, []);

  const getRates = () => {
    RatesService.getAll().then((data: any) => setRates(data));
  };

  console.log(status);

  return [rates];
};

export default useRates;
