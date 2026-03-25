import { useState } from "react";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import { transactions } from "../../data/walletData";
import "./EWallet.css";

const EWallet = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => setOpenId((prev) => (prev === id ? null : id));
  return (
    <div className="e-wallet-container">
      <section className="top-section">
        <h1>E-Wallet</h1>
        <p>View your wallet balance, and learning rewards.</p>
      </section>

      <section className="balance-card">
        <h2>Token Balance</h2>

        <div className="bits-coin-balance">
          <h5>BITS Coin</h5>
          <div className="coin">
            <img src="/src/assets/bitcoin.webp" alt="Bits Coin" />
            <span>10,000</span>
          </div>
        </div>
      </section>

      <section className="history">
        <h2>Transaction History</h2>
        <div className="history-list">
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} {...tx} expanded={openId === tx.id} onToggle={() => handleToggle(tx.id)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EWallet;
