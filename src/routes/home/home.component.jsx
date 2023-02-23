import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <Outlet />
      <div id="jumbotron" className="jumbo-container">
        <h1>
          <div className="warm">
            <span className="one">W</span>
            <span className="two">A</span>
            <span className="three">R</span>
            <span className="four">M</span>
            <span>&nbsp;</span>
            <span className="five">U</span>
            <span className="six">P</span>
            <span className="seven">S</span>
            <span>&nbsp;</span>
          </div>

          <div className="by">
            <span className="eight">by</span>
          </div>

          <span>&nbsp;</span>
          <div className="hunter">
            <span className="nine">H</span>
            <span className="ten">U</span>
            <span className="eleven">N</span>
            <span className="twelve">T</span>
            <span className="thirteen">E</span>
            <span className="fourteen">R</span>
            <span className="fifteen">O</span>
            <span className="sixteen">G</span>
            <span className="seventeen">E</span>
            <span className="eightteen">N</span>
            <span className="nineteen">E</span>
            <span className="twenty">O</span>
            <span className="twentyone">U</span>
            <span className="twentytwo">S</span>
          </div>
        </h1>
        <h2>
          222 unique collectible pieces of art that grant you access to
          Hunterogeneous world stored on the Ethereum blockchain.
        </h2>
        <h3 className="soldout">SOLD OUT</h3>
      </div>
    </div>
  );
};

export default Home;
