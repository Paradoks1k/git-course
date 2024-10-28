import "./CostDate.css";

const CostDate = (props) => {
  const month = props.date.toLocaleString("ru-Ru", { month: "long" });
  const years = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-Ru", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date_month">{month}</div>
      <div className="cost-date__years">{years}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostDate;
