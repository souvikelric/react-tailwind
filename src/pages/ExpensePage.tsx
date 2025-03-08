import { useState } from "react";
import TabBar from "../components/TabBar/TabBar";
import Layout from "./LayoutHOC";

export type TabData = {
  name: string;
};
const tabData: TabData[] = [
  { name: "All" },
  { name: "Weekly" },
  { name: "Monthly" },
  { name: "Quarterly" },
  { name: "Annually" },
];

function ExpensePage() {
  const [activeContent, setActiveContent] = useState(tabData[0].name);
  return (
    <Layout>
      <div className="min-h-screen bg-gray-800 p-5">
        <h1 className="text-4xl text-white">Expenses Page</h1>
        <TabBar tabData={tabData} setActiveContent={setActiveContent} />
        <div className="h-70 w-80 mx-3 text-blue-400 text-5xl mt-5">
          {activeContent}
        </div>
      </div>
    </Layout>
  );
}

export default ExpensePage;
