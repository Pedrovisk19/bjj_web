import React, { Suspense, Fragment, lazy } from "react";
import { Router, Route } from 'react-router-dom';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<div>Loading...</div>}>
    {routes.map((route) => {
      const Component = route.component;
      const Guard = route.guard || Fragment;
      const LayoutComponent = route.layout || Fragment;

      return (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Guard parameters={route.parameters}>
              <LayoutComponent>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </LayoutComponent>
            </Guard>
          )}
        />
      );
    })}
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: "/login",
    component: lazy(() => import("../screens/Login/index")),
  },
];

export default routes;
