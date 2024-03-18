import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AccountPage from './index';

const mockStore = configureStore();

describe('AccountPage', () => {
  it('renders account information correctly', () => {
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
            <AccountPage />
        </Provider>
        );

    const accountHeaders = screen.getAllByTestId("account-info");
    const accountTitleElements = screen.getAllByTestId('account-title');
    const balanceElements = screen.getAllByTestId('balance');
    const balanceDescriptionElements = screen.getAllByTestId('balance-description');

    expect(accountHeaders.length).toBe(1);
    expect(accountTitleElements.length).toBe(3); // Replace 2 with the actual number of accounts
    expect(balanceElements.length).toBe(3); // Replace 2 with the actual number of accounts
    expect(balanceDescriptionElements.length).toBe(3); // Replace 2 with the actual number of accounts
  });
});
