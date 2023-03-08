import httpConfig from '../../auth/http-config';

const getAll = async () => {
  return await httpConfig.get('/rates');
};

const RatesService = {
  getAll
};

export default RatesService;
