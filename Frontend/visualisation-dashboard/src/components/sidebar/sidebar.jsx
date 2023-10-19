import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">admin</span>
      </div>
      <div className="centre">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
//sidebar icons at 29:00
