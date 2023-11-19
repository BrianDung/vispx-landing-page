import '@ant-design/flowchart/dist/index.css';
import { Web3ReactProvider } from '@web3-react/core';
import BigNumber from 'bignumber.js';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import 'src/assets/scss/_themes.scss';
import 'src/assets/scss/variable.scss';
import './App.scss';
import LocaleProviderComponent from './components/15.locale-provider';
import ToastContext from './contexts/toast';
import Routes from './routes/Routes';
// import { BaseSocket } from './socket/BaseSocket';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { appConnectors } from './web3/connectors';
import initStore from './store';
dayjs.extend(relativeTime);

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: [-50, 50],
});

const App: React.FC = () => {
  const { store , persistor} = initStore();

  return (
    <Web3ReactProvider connectors={appConnectors}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LocaleProviderComponent>
            <BrowserRouter basename="/">
              {/* <Layout> */}
                <ToastContext />
                <Routes />
              {/* </Layout> */}
            </BrowserRouter>
          </LocaleProviderComponent>
        </PersistGate>
      </Provider>
    </Web3ReactProvider>
  );
};

export default App;
