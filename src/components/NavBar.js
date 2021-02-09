import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="flex header side-padding">
    <h1>Math Magicians</h1>
    <div className="flex nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/calculator" className="nav-link">
        Calculator
      </Link>
      <Link to="/quote" className="nav-link">
        Quote
      </Link>
    </div>
  </div>
);

export default Navbar;
