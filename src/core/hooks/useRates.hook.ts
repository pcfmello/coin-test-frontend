import { useEffect, useState } from 'react';
import RatesService from '../services/rates.service';

const useRates = () => {
  const [status, setStatus] = useState('false');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRates();
  }, []);

  const getRates = () => {
    RatesService.getAll().then((data: any) => setRates(data));
  };

  console.log(status);

  return [status, rates];
};

export default useRates;
