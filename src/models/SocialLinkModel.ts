import { FC, SVGProps } from 'react';

export type SocialLinkItem = {
  name: string;
  url: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};
