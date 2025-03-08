import { NavLink } from "react-router-dom";
import Layout from "./LayoutHOC";

function ExpensePage() {
  return (
    <Layout>
      <div className="h-screen bg-gray-800">
        <NavLink to="/">Home</NavLink>
        <h1 className="text-4xl text-white">Expenses Page</h1>
      </div>
    </Layout>
  );
}

export default ExpensePage;
