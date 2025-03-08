interface InfoCardProp {
  header: string;
  paragraph: string;
}
export default function InfoCards({ header, paragraph }: InfoCardProp) {
  return (
    <div
      className="h-50 w-170 flex flex-col gap-3 bg-gray-900 text-white mt-10 p-5
    shadow-xs cursor-pointer"
    >
      <div className="text-4xl text-amber-200">{header}</div>
      <div className="text-[26px]">{paragraph}</div>
    </div>
  );
}
