import { Route, Routes } from 'react-router-dom';

import * as P from '../view/pages';

export function Router() {
  return (
    <Routes>
      <Route path="/auth" element={<P.SignIn />} />
      <Route path="/forgot" element={<P.Forgot />} />
      <Route path="/reset" element={<P.Reset />} />

      <Route path="/" element={<P.Home />} />
      <Route path="/details" element={<P.Details />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
