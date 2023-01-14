import { FC, PropsWithChildren } from 'react';
import styles from 'components/Container/Container.module.scss';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
