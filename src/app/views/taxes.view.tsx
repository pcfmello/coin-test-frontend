import useRates from '../../core/hooks/useRates.hook';

const TaxesViewComponent = () => {
  const obj = useRates();
  console.log('rates ', obj);
  return <h1>Olá, Teste</h1>;
};

export default TaxesViewComponent;
