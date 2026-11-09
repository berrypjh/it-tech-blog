import { Callout } from '@it-tech-blog/ui';

/**
 * 본문 속 과제와 접어 둔 해설. 과제는 실습 상자로 보이고, 해설은 스스로 생각한 뒤 펼쳐 본다.
 * 스크립트 없이 동작하는 서버 컴포넌트다.
 */
export const Exercise = ({
  title,
  question,
  answerLabel,
  answer,
}: {
  title: string;
  question: React.ReactNode;
  answerLabel: string;
  answer: React.ReactNode;
}) => (
  <>
    <Callout variant="practice" title={title}>
      {question}
    </Callout>
    <details className="my-md overflow-hidden rounded-md border border-stroke-light bg-background-surface">
      <summary className="cursor-pointer px-lg py-md text-xsm font-semiBold text-text-default hover:bg-background-grey/20">
        {answerLabel}
      </summary>
      <div className="flex flex-col gap-sm border-t border-stroke-light px-lg py-md text-xsm">
        {answer}
      </div>
    </details>
  </>
);
