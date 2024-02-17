import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Account from './index';

describe('Account', () => {
  const accountType = 'Savings Account';
  const accountNumber = '1234567890';
  const balance = '$1000';
  const balanceDescription = 'Available Balance';

  it('renders account component correctly', () => {
    render(<Account
      accountType={accountType}
      accountNumber={accountNumber}
      balance={balance}
      balanceDescription={balanceDescription}
    />);

    const accountElement = screen.getByTestId('account');
    const accountTitleElement = screen.getByText(`${accountType} (${accountNumber})`);
    const accountAmountElement = screen.getByText(balance);
    const accountAmountDescriptionElement = screen.getByText(balanceDescription);
    const transactionButtonElement = screen.getByText('View transactions');

    expect(accountElement).toBeInTheDocument();
    expect(accountTitleElement).toBeInTheDocument();
    expect(accountAmountElement).toBeInTheDocument();
    expect(accountAmountDescriptionElement).toBeInTheDocument();
    expect(transactionButtonElement).toBeInTheDocument();
  });

});