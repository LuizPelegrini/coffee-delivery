import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { Checkout } from '../pages/Checkout';
import { CheckoutSuccess } from '../pages/CheckoutSuccess';
import { Home } from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/checkout/success',
        element: <CheckoutSuccess />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/coffee-delivery',
});

export function Router() {
  return <RouterProvider router={router} />;
}
