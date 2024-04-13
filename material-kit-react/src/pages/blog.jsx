import { Helmet } from 'react-helmet-async';

// import { BlogView } from 'src/sections/blog/view';
import PendingLoans from './PendingLoans';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      {/* <BlogView /> */}
      <PendingLoans/>
    </>
  );
}
