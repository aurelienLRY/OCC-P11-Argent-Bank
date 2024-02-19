import accountData from "./DataAccount.json";
import { useSelector } from "react-redux";
import Account from "../../components/Account";
import EditUserName from "../../components/EditUserName";
//import editUserName  from "./editUserName";

import "./style.scss";
const AccountPage = () => {
  const { accounts } = accountData;
  const  { profil }  = useSelector((state) => state.auth.user);

  return (
    <main className="main bg-dark">
      <div className="account-header">
        <EditUserName
        firstName = {profil.firstName}
        lastName= {profil.lastName}
        userName= {profil.userName}
         />
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
