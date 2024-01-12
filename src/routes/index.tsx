import { Route, Routes } from 'react-router-dom';

import { Layout } from '../view/layout/Layout';
import { Home } from '../view/pages/home/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
