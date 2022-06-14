import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ErrorPage, LandingPage, RegisterPage } from "./Pages";
import {
  Stats,
  SharedLayout,
  AddJob,
  Profile,
  AllJobs,
} from "./Pages/Dashboard/";
import { ProtectedRoutes } from "./Pages/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/landing">landing</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <SharedLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
