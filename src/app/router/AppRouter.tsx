import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../../components/templates/MainLayout/MainLayout";

import HomePage from "../../pages/HomePage";
import SettingsPage from "../../pages/SettingsPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
