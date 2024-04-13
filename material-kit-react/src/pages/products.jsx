import { Helmet } from 'react-helmet-async';
import BorrowerRequests from './BorrowerRequests';
import FormDialog from './FormDialog';

// import { ProductsView } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      {/* <ProductsView /> */}
      <BorrowerRequests/>
      <FormDialog/>
    </>
  );
}
