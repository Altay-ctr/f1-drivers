import { Link } from 'react-router-dom';

export default function DriverCard({ driver }) {
  return (
    <Link to={`/driver/${driver.id}`} className="driver-card">
      <img src={driver.image} alt={driver.name} />
      <div className="driver-info">
        <h3>{driver.name}</h3>
        <p>{driver.country}</p>
        <div className="stats">
          <span>Титулы: {driver.championships}</span>
          <span>Победы: {driver.wins}</span>
        </div>
      </div>
    </Link>
  );
}