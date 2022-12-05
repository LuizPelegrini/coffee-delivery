import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { Checkout } from '../pages/Checkout';
import { CheckoutSuccess } from '../pages/CheckoutSuccess';
import { Home } from '../pages/Home';

const router = createBrowserRouter([
  {
    path: 'coffee-delivery',
    element: <DefaultLayout />,
    children: [
      {
        path: '/coffee-delivery/',
        element: <Home />,
      },
      {
        path: '/coffee-delivery/checkout',
        element: <Checkout />,
      },
      {
        path: '/coffee-delivery/checkout/success',
        element: <CheckoutSuccess />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
