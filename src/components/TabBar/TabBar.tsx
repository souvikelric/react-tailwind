import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TabData } from "../../pages/ExpensePage";

export default function TabBar({
  tabData,
  setActiveContent,
}: {
  tabData: TabData[];
  setActiveContent: Dispatch<SetStateAction<string>>;
}) {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    setActiveContent(tabData[activeTab].name);
  }, [activeTab]);
  return (
    <div className="h-[7vh] w-full flex gap-3 mt-5">
      {tabData.map((td, i: number) => (
        <TabButton key={i} data={td} setActiveTab={setActiveTab} index={i} />
      ))}
    </div>
  );
}

const TabButton = ({
  data,
  setActiveTab,
  index,
}: {
  data: TabData;
  setActiveTab: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  const handleChangeTab = (index: number) => {
    setActiveTab(index);
    console.log(index);
  };
  return (
    <button
      onClick={() => handleChangeTab(index)}
      className={`px-5 py-[10px] bg-gray-800 text-white rounded-lg cursor-pointer`}
    >
      {data.name}
    </button>
  );
};
