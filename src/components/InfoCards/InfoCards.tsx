import { useNavigate } from "react-router-dom";

interface InfoCardProp {
  header: string;
  paragraph: string;
}
export default function InfoCards({ header, paragraph }: InfoCardProp) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/expenses");
  }
  return (
    <div
      onClick={handleClick}
      className="h-50 w-170 flex flex-col gap-3 bg-gray-900 text-white mt-10 p-5
    shadow-xs cursor-pointer hover:bg-gray-300 hover:text-gray-800 duration-300 ease-in-out group"
    >
      <div className="text-4xl text-amber-200 group-hover:text-blue-950">
        {header}
      </div>
      <div className="text-[26px]">{paragraph}</div>
    </div>
  );
}
