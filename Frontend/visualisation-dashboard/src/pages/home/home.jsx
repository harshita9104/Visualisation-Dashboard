import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/Widgets/widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

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
        <div className="charts">
          <Featured />
          <Chart title="Last 6 months(Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">latest transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
