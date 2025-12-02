import DriverCard from './DriverCard';
import { drivers } from '../data/drivers';

export default function DriverList() {
  return (
    <div className="driver-list">
      <h1>Легенды Формулы-1</h1>
      <div className="grid">
        {drivers.map(driver => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
}