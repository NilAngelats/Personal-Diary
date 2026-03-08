import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AddEntry from "./pages/AddEntry";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={MainLayout}>
        <Route index element={HomePage} />
        <Route path="/entry" element={AddEntry} />
      </Route>
    </Routes>
  );
}

export default App;
