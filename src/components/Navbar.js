import { Link } from "react-router-dom";

// Styles
import styles from './Navbar.module.css';

// Components
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
      <nav className={`${styles.Navbar} spacing flex justify-between items-center`}>
        <h2 className="heading-secondary">
          <Link to="/">
            <span className="paragraph">\m/ </span>
            Andrej Sipka
          </Link>
        </h2>

        <div className="flex items-center">
          <ul className={styles.links__list}>
            <li className="paragraph"><Link to="/">Work</Link></li>
          </ul>
        
          <ThemeButton />
        </div>
      </nav>
  );
}

export default Navbar;