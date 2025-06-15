import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { LoginScreen } from "./screens/LoginScreen.jsx";
import { RegisterScreen } from "./screens/RegisterScreen.jsx";
import store from "./store.js";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import {Provider} from 'react-redux'
import { ProfileScreen } from "./screens/ProfileScreen.jsx";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route element={<PrivateRoute />}>
          <Route path="profile" element={<ProfileScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </Provider>
);
