import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import Config Function of app Store
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig';

//Redux Imports: 
import { Provider } from 'react-redux';
import App from "./App";
import AppReduxSaga from './AppReduxSaga';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// We create the app Store
let appStore = createAppStore();
let appAsyncStore = createAppAsyncStore();

root.render(
  <Provider store={appAsyncStore}>
    <StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </StrictMode>
  </Provider>
);
