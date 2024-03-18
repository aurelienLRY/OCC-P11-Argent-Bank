
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import EditUserName from './index.jsx';

const mockStore = configureStore();

it('renders correctly with initial state', () => {
  const store = mockStore({
    auth: {
      user: {
        profil: {
          firstName: 'John',
          lastName: 'Doe',
          userName: 'johnDoe',
        },
        token : 'fakeToken',
      },
    },
  });

  render(
    <Provider store={store}>
      <EditUserName />
    </Provider>
  );

  const welcomeText= screen.getByText(/Welcome back John Doe/i);
  expect(welcomeText).toBeDefined();
  // Ajoutez ici vos assertions
});
