import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
