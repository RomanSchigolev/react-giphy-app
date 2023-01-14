import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';
import styles from 'components/Layout/Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={styles.LayoutWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
