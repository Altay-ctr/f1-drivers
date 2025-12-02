import { useParams, Link } from 'react-router-dom';
import { drivers } from '../data/drivers';

export default function DriverDetail() {
  const { id } = useParams();
  const driver = drivers.find(d => d.id === parseInt(id));

  if (!driver) {
    return <div>Гонщик не найден</div>;
  }

  return (
    <div className="driver-detail">
      <Link to="/" className="back-btn">← Назад к списку</Link>
      
      <div className="detail-content">
        <img src={driver.image} alt={driver.name} />
        
        <div className="detail-info">
          <h1>{driver.name}</h1>
          <p className="country">{driver.country}</p>
          
          <div className="stats-big">
            <div><strong>Чемпионаты:</strong> {driver.championships}</div>
            <div><strong>Победы:</strong> {driver.wins}</div>
            <div><strong>Поулы:</strong> {driver.poles}</div>
            <div><strong>Годы в Ф1:</strong> {driver.years}</div>
            <div><strong>Команды:</strong> {driver.team}</div>
          </div>
          
          <div className="bio">
            <h3>О гонщике</h3>
            <p>{driver.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}