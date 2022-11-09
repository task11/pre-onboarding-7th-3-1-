import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/create';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme';

import AppRouter from './router';

export default function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}
