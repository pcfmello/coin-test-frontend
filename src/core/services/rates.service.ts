import httpConfig from '../../auth/http-config';

const getAll = () => {
  return httpConfig.get<Array<any>>('/rates');
};

const RatesService = {
  getAll
};

export default RatesService;
