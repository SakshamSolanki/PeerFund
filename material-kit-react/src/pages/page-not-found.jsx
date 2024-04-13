import { Helmet } from 'react-helmet-async';

import { NotFoundView } from 'src/sections/error';
import FinanceCards from './FinanceCards';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      {/* <NotFoundView /> */}
      <FinanceCards/>
    </>
  );
}
