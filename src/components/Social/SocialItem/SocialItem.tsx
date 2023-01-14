import { FC } from 'react';
import { SocialLinkItem } from 'models';
import styles from 'components/Social/SocialItem/SocialItem.module.scss';

interface SocialItemProps {
  socialLinkItem: SocialLinkItem;
}

export const SocialItem: FC<SocialItemProps> = ({ socialLinkItem }) => {
  return (
    <li className={styles.SocialItem}>
      <a href={socialLinkItem.url} target="_blank" rel="noreferrer">
        <socialLinkItem.icon />
      </a>
    </li>
  );
};
