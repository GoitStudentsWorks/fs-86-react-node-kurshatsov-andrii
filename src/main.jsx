import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './styles/globalStyles.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/fs-86-react-node-kurshatsov-andrii">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
