import { useState } from 'react';

interface TaxesModel {
  status: boolean;
}

const useTaxes = (initialStatus: TaxesModel) => {
  const [status, setStatus] = useState(initialStatus);

  return [status];
};

export default useTaxes;
