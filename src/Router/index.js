import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/Forgot";
import AuthLayout from "../Components/Layouts/AuthLayout";
import CardCategory from "../Components/Card/CardCategory";

export default function Router() {
  return (
    <Routes>
      <Route element={<ProtectRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CardCategory />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="forgot" element={<ForgotPassword />} />
    </Routes>
  );
}
