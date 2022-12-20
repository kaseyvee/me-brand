import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="Header">
        <Link to="/">
          <h1>me.brand()</h1>
        </Link>
        <h2>so who are ya</h2>
      </div>
  );
}

export default Header;
