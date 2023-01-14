import { NavLink, Outlet } from 'react-router-dom';
import styles from 'components/Layout/Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.LayoutWrapper}>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>footer</div>
      </footer>
    </div>
  );
};
