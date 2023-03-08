import useRates from '../../core/hooks/useRates.hook';

const TaxesViewComponent = () => {
  const obj = useRates();
  return <h1>Olá, {obj}</h1>;
};

export default TaxesViewComponent;
