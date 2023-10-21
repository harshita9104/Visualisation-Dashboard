import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/Widgets/widgets";
import Charts from "../../components/charts/chart";
import Featured from "../../components/featured/featured";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="" />
          <Widget type="" />
          <Widget type="" />

          <Widget type="" />
        </div>
        <div className="charts"></div>
        <Featured />
        <Charts />
      </div>
    </div>
  );
};

export default Home;
