import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import App from 'App';
import { store } from 'store';

import 'assets/styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
    <Toaster position="bottom-center" />
  </Provider>
);
