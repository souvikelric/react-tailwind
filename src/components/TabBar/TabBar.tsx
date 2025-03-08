import { useState } from "react";

type TabData = {
  name: string;
};
const tabData: TabData[] = [
  { name: "Weekly" },
  { name: "Monthly" },
  { name: "Quarterly" },
  { name: "Anually" },
];
export default function TabBar() {
  const [activeTab, _setActiveTab] = useState(0);
  return (
    <div className="h-[7vh] w-full flex gap-3 mt-5">
      {tabData.map((td, i: number) => (
        <button
          className={`px-5 py-[10px] ${
            activeTab === i ? "bg-gray-700" : "bg-gray-800"
          } text-white rounded-lg cursor-pointer`}
        >
          {td.name}
        </button>
      ))}
    </div>
  );
}
