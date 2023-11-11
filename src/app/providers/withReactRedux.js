import { Provider } from 'react-redux';
import store from '../../redux/store';

export const withReactRedux = (component) => () => (
  <Provider store={store}>
    {component}
  </Provider>
);