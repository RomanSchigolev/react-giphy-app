import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages';
import { Layout } from 'components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Error Page</div>,
  },
]);
