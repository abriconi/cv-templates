import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./shared-components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}

export default App;
