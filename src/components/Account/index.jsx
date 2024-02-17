import PropTypes from 'prop-types';
import'./style.scss';

/**
 * Represents an account component.
 * @param {string} accountType - The type of the account.
 * @param {string} accountNumber - The account number.
 * @param {string} balance - The account balance.
 * @param {string} balanceDescription - The description of the account balance.
 * @returns {JSX.Element} The account component.
 */
const Account = ({ accountType, accountNumber, balance, balanceDescription }) => {
    return (
        <article className="account" data-testid="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{`${accountType} (${accountNumber})`}</h3>
                <p className="account-amount">{balance}</p>
                <p className="account-amount-description">{balanceDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </article>
    );
};

Account.propTypes = {
    accountType: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    balanceDescription: PropTypes.string.isRequired,
};

export default Account;