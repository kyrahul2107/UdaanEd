import { Link } from 'react-router-dom';
import '../components/Dashboard.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>UdaanEd</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
          <li><Link to="/fees">Fees</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/tests">Tests</Link></li>
        </ul>
      </nav>
    </div>
  );
}
