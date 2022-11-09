import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './layouts/Main/Main';
import Homepage from './pages/Homepage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </Router>
  );
}
