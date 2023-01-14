import { FC } from 'react';
import { Container, SocialList } from 'components';
import { socialLinkList } from 'constants';
import styles from 'components/Footer/Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.FooterContent}>
          <div className={styles.FooterNamePart}>
            <span>Roman Schigolev</span>
            <p>Frontend Developer</p>
          </div>
          <div>
            <SocialList socialLinkList={socialLinkList} />
          </div>
        </div>
      </Container>
    </footer>
  );
};
