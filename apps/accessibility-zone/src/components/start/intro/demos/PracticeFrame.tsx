/** 실습 데모의 공통 틀. 머리말에 안내 문구를 두고 본문에 실습 UI를 담는다. */
export const PracticeFrame = ({
  label,
  instructions,
  children,
}: {
  label: string;
  instructions: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="my-xl rounded-md border border-stroke-success">
    <p className="border-b border-stroke-light px-lg py-sm text-xxsm text-text-light">
      <strong className="text-text-success">{label}</strong> — {instructions}
    </p>
    <div className="flex flex-col gap-lg p-lg">{children}</div>
  </div>
);
