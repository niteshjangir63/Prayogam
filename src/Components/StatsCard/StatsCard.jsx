import "./StatsCard.css"
export default function StatsCard({ title, value, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}