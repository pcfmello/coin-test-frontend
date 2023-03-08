import { RouteObject, useRoutes } from 'react-router-dom';
import App from '../App';
import TaxesViewComponent from './views/taxes.view';

export const ConfigRouter = () => {
  const routes: RouteObject[] = [
    { path: '', element: <TaxesViewComponent /> },
    { path: 'rates', element: <TaxesViewComponent /> }
  ];

  const appRoutes = useRoutes(routes);

  return <>{appRoutes}</>;
};
