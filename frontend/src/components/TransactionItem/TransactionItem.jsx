import Icon from "../Icon";
import "./TransactionItem.css";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return {
    month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: date.getDate(),
    full: date
      .toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase(),
  };
};

const TransactionItem = ({
  amount,
  date,
  courseName,
  topic,
  activity,
  message,
  expanded,
  onToggle,
}) => {
  const { month, day, full } = formatDate(date);

  return (
    <div className="transaction-item">
      <div className="transaction-row" onClick={onToggle}>
        <div className="transaction-date">
          <div className="date">
            <span className="month">{month}</span>
            <span className="day">{day}</span>
          </div>
          <Icon name={amount > 0 ? "earn-arrow" : "sad"} size={18} />
        </div>

        <div className="transaction-info">
          <span className="amount">
            +{amount}{" "}
            <img src="/src/assets/bitcoin.webp" alt="coin" width={18} />
          </span>
          <span className="message">{message}</span>
        </div>

        <button className="toggle-btn">
          More <br /> Details <Icon name="chevron-down" size={12} className={expanded ? "chevron-up" : ""} />
        </button>
      </div>

      <div className={`transaction-details ${expanded ? "expanded" : ""}`}>
          <div className="detail-row">
            <span>Amount:</span>
            <span>{amount}.00</span>
          </div>
          <div className="detail-row">
            <span>Date Received:</span>
            <span>{full}</span>
          </div>
          <div className="detail-row">
            <span>Course Name:</span>
            <span>{courseName.toUpperCase()}</span>
          </div>
          <div className="detail-row">
            <span>Topic:</span>
            <span>{topic.toUpperCase()}</span>
          </div>
          <div className="detail-row">
            <span>Activity:</span>
            <span>{activity.toUpperCase()}</span>
          </div>
        </div>
    </div>
  );
};

export default TransactionItem;
