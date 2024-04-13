/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    // <>
    //   <script src="./hive.min.js"></script>
    // <script>
    // hive.api.getAccounts(['mahdiyari', 'hiveio'], function(err, response){
    //     console.log(err, response)
    // });
    // </script>
    

    <ThemeProvider>
      <Router />
    </ThemeProvider>
    // </>
  );
}
