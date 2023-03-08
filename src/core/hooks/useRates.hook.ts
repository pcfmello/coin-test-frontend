import { useEffect, useState } from 'react';
import { RatesList } from '../models/rates.model';
import RatesService from '../services/rates.service';

const useRates = () => {
  const [rates, setRates] = useState<RatesList[]>([]);

  useEffect(() => {
    getRates();
  }, []);

  const getRates = () => {
    RatesService.getAll().then(({ data }) => {
      setRates(data.data);
      console.log(data.data);
    });
  };

  return [rates];
};

export default useRates;
