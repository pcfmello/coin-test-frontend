import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import TaxesViewComponent from './views/taxes.view';

export const ConfigRouter = () => {
  const routes: RouteObject[] = [
    { path: '/', element: <Navigate to="/" /> },
    { path: 'taxes', element: <TaxesViewComponent /> }
    // { path: '*', element: <NotFoundComponent /> }
  ];

  const appRoutes = useRoutes(routes);

  return <>{appRoutes}</>;
};
