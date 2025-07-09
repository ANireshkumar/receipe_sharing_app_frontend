import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToastProvider from "./components/ToastProvider";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import authLoader from "./loaders/unit/authLoader";
import Logout from "./components/Logout";
import AdminWrapper from "./wrappers/AdminWrapper";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserFeed from "./pages/user/UserFeed";
import CreatePost from "./pages/user/CreatePost";
import userFeedLoader from "./loaders/combined/userFeedLoader";
import ConfirmationDialog from "./components/ConfirmationDialog";
import ProfilePage from "./pages/user/ProfilePage";
import Loader from "./components/Loader";

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <UserDashboard />
      },
      {
        path: "logout",
        element: <Logout />,
        hydrateFallbackElement: <Loader />
      },
      {
        path: "feed",
        element: <UserFeed />,
        hydrateFallbackElement: <Loader />,
        loader: userFeedLoader
      },
      {
        path: "create-post",
        element: <CreatePost />
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: authLoader,
        hydrateFallbackElement: <Loader />
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        path: "",
        element: <AdminDashboard />
      },
      {
        path: "logout",
        element: <Logout />,
        hydrateFallbackElement: <Loader />
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: authLoader,
        hydrateFallbackElement: <Loader />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
})

const App = () => {
  return <>
    <Provider store={store}>
      <ToastProvider />
      <ConfirmationDialog />
      <RouterProvider router={router} />
    </Provider>
  </>
}

export default App;