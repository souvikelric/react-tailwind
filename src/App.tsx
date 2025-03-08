import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExpensePage from "./pages/ExpensePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/expenses" Component={ExpensePage} />
      </Routes>
    </BrowserRouter>
  );
}
