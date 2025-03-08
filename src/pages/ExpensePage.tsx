import TabBar from "../components/TabBar/TabBar";
import Layout from "./LayoutHOC";

function ExpensePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-800 p-5">
        <h1 className="text-4xl text-white">Expenses Page</h1>
        <TabBar />
      </div>
    </Layout>
  );
}

export default ExpensePage;
