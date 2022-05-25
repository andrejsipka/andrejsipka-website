import { Link } from "react-router-dom";

// Styles
import styles from './Navbar.module.css';

// Components


const Navbar = () => {
  return (
      <nav className={styles.Navbar}>
        <div className={`${styles.Navbar__wrapper} spacing flex justify-between items-center`}>
          <h2 className="heading-secondary">
            <Link to="/">
              Andrej Sipka
            </Link>
          </h2>

          <div className="flex items-center">
            <ul className={styles.links__list}>
              <li className="paragraph"><Link to="/">Work</Link></li>
            </ul>
        
            <button className="button--outlined">Say Hello!</button>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;