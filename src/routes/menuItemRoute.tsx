import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../views/Home';

const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Home />} />
  </ReactRoutes>
);

export default Routes;