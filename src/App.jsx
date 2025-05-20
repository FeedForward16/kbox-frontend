import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import ProtectedRouter from "./routes/ProtectedRouter";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const SignUpCon = lazy(() => import("./containers/SignUpContainer/SignUpCon"));
const DashBoard = lazy(() => import("./pages/DashBoard/DashBoard"));
const LoginContainer=lazy(()=>import('./containers/LoginContainer/LoginContainer'));

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LandingPage />
            </Suspense>
          ),
        },
        {
          path: "/sign-up",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <SignUpCon />
            </Suspense>
          ),
        }, {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginContainer />
            </Suspense>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <DashBoard />
              </Suspense>
            </ProtectedRouter>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
