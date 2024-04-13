import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Account',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Loan Request',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'My Loan',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Add Funds',
    path: '/addfunds',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
