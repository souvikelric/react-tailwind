import { NavLink } from "react-router-dom";

export default function ExpensePage() {
  return (
    <div className="h-screen bg-gray-800">
      <NavLink to="/">Home</NavLink>
      <h1 className="text-4xl text-white">Expenses Page</h1>
    </div>
  );
}
