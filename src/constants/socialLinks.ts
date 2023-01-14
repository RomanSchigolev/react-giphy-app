import { SocialLinkItem } from 'models';
import { ReactComponent as VkLogo } from 'assets/icons/vk.svg';
import { ReactComponent as LinkedInLogo } from 'assets/icons/linkedin.svg';
import { ReactComponent as TelegramLogo } from 'assets/icons/telegram.svg';
import { ReactComponent as GithubLogo } from 'assets/icons/github.svg';

export const socialLinkList: SocialLinkItem[] = [
  {
    name: 'VK',
    url: 'https://vk.com/roman_schigolev',
    icon: VkLogo,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/romanschigolev/',
    icon: LinkedInLogo,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/RomanSchigolev',
    icon: TelegramLogo,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/RomanSchigolev',
    icon: GithubLogo,
  },
];
