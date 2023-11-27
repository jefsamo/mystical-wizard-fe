import { Link } from "react-router-dom";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        backgroundImage: `url("https://openseauserdata.com/files/6d4b873bd01107ff35489dbe69e031d1.png")`,
        height: "400px",
      }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/">Opensea</Link>

          <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
