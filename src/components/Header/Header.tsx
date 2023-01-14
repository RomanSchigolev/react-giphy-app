import { FC } from 'react';
import { Container } from 'components';
import Logo from 'assets/images/logo.gif';
import styles from 'components/Header/Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderContent}>
          <div className={styles.HeaderLogo}>
            <img src={Logo} alt="logo" />
            <span className={styles.HeaderSubtitle}>React+GIPHY</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
