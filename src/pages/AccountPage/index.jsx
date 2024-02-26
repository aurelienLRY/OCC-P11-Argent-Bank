import accountData from "./DataAccount.json";
import Account from "../../components/Account";
import EditUserName from "../../components/EditUserName";
//import editUserName  from "./editUserName";
import "./style.scss";


const AccountPage = () => {
  const { accounts } = accountData;


  return (
    <main className="main bg-dark">
      <div className="account-header">
        <EditUserName />
      </div>
      <section
        role="Account Information"
        className="account-info"
        aria-labelledby="accountHeader"
      >
        <h2 id="accountHeader" className="sr-only">
          Accounts
        </h2>
        {accounts.map((account, index) => (
          <Account
            key={`account-${index}`}
            accountType={account.accountType}
            accountNumber={account.accountNumber}
            balance={account.balance}
            balanceDescription={account.balanceDescription}
          />
        ))}
      </section>
    </main>
  );
};

export default AccountPage;
