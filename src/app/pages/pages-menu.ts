import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  }, {
    title: 'Data science',
    icon: 'nb-bar-chart',
    link: '/pages/blog',
    home: false,
  },
];
