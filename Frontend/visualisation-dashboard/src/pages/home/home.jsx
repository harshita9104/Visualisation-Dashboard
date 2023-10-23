import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/Widgets/widgets";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="Intensity" />
          <Widget type="likelihood" />

          <Widget type="Relevance" />
        </div>
        <div className="charts"></div>
      </div>
    </div>
  );
};

export default Home;
