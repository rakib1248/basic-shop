import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AppRouter;
