import { FC } from 'react';
import { SocialLinkItem } from 'models';
import { SocialItem } from 'components';
import styles from 'components/Social/SocialList/SocialList.module.scss';

interface SocialListProps {
  socialLinkList: SocialLinkItem[];
}

export const SocialList: FC<SocialListProps> = ({ socialLinkList }) => {
  return (
    <nav>
      <ul className={styles.SocialList}>
        {socialLinkList.map((socialLink) => (
          <SocialItem key={socialLink.name} socialLinkItem={socialLink} />
        ))}
      </ul>
    </nav>
  );
};
