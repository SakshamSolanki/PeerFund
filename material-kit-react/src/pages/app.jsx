import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';
import TransactionHistory from './TransactionHistory';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Transaction History | Minimal UI </title>
      </Helmet>

      {/* <AppView /> */}
      <TransactionHistory/>
    </>
  );
}
