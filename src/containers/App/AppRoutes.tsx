import React, { FC, useEffect } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import URLS from "constants/urls";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { getToken } from "utils/localStorage";
import { setLoggedIn } from "store/user/UserSlice";
import LoginPage from "containers/LoginPage";
import Utilities from "containers/Utilities";
import MainPage from "containers/MainPage";
import MainPage1 from "containers/MainPage1";
import MainPage2 from "containers/MainPage2";

type ProtectedRouteProps = {
  isAllowed: boolean;
  children?: React.ReactElement;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to={URLS.LOGIN} replace />;
  }

  return children ? children : <Outlet />;
};

function AppRoutes() {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    const token = getToken();
    dispatch(setLoggedIn(Boolean(token)));
  }, [dispatch]);

  return (
    <Routes>
      <Route index path={URLS.LOGIN} element={<LoginPage />} />
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route
          path={URLS.HOME}
          element={<MainPage />}
        />
        <Route
          path={URLS.MAIN}
          element={<Utilities />}
        />
        <Route
          path={URLS.MAIN1}
          element={<MainPage1 />}
        />
        <Route
          path={URLS.MAIN2}
          element={<MainPage2 />}
        />

      </Route>
      <Route path="*" element={<Navigate to={URLS.MAIN} replace />} />
    </Routes>
  );
}

export default AppRoutes;
