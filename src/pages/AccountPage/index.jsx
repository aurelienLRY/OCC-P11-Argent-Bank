import { useState } from "react";
import accountData from "./DataAccount.json";
import { useSelector } from "react-redux";
import Account from "../../components/Account";
//import editUserName  from "./editUserName";

import "./style.scss";
const AccountPage = () => {
  const { accounts } = accountData;
  const [editMode, setEditMode] = useState(false);
 // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { profil } = useSelector((state) => state.auth.user);



    return (
      <main className="main bg-dark">
        <div className="account-header">
          <h2>
            Welcome back <br />
            {`${profil.firstName} ${profil.lastName} `}!
          </h2>
          <button
            className="edit-button"
            onClick={() => setEditMode(!editMode)}
          >
            Edit Name
          </button>
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
