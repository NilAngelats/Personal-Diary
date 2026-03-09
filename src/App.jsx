import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/entry" element={<AddPage />} />
      </Route>
    </Routes>
  );
}

export default App;
