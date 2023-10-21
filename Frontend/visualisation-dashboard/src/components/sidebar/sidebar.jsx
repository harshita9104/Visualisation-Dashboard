import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">admin</span>
      </div>
      <div className="centre">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleIcon className="icon" />
            <span>Pestle</span>
          </li>

          <li>
            <EnergySavingsLeafIcon className="icon" />
            <span>Sector</span>
          </li>

          <li>
            <SouthAmericaIcon className="icon" />
            <span>Region</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
//sidebar icons at 29:00
