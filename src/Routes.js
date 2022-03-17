import { Routes as Switch, Route } from 'react-router-dom'

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

import PrivateRoute from './Components/Auth/PrivateRoute';

import AuthProvider from "./Contexts/AuthContext";

const Routes = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="*"
          element={<Login />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/registro"
          element={<Register />}
        />
        <Route
          exact
          path="/"
          element={<PrivateRoute><Home /></PrivateRoute>}
        />
      </Switch>
    </AuthProvider>
  );
}

export default Routes