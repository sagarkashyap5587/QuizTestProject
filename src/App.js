import React from "react";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import PageRoutes from "./routes/pageRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {PageRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={
                  route.isPrivate ? (
                    <PrivateRoute>
                      <route.Components />
                    </PrivateRoute>
                  ) : (
                    <PublicRoute>
                      <route.Components />
                    </PublicRoute>
                  )
                }
              ></Route>
            );
          })}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
