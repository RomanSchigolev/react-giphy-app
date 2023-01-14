import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages';
import { Layout } from 'components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <div>About page</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Error Page</div>,
  },
]);
