import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./use/Loader";

// Lazy loading components
const Home = React.lazy(() => import("../pages/Home"));
// const NotFound = React.lazy(() => import("../pages/NotFound"));

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
