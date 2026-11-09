import type { Locale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';

const content = {
  ko: {
    practice: '실습 예제',
    instructions: '화면 낭독기를 켠 뒤 아래 과업 표의 순서대로 이 예제에서 해 봅니다.',
    title: '예제: 배송 메모',
    lead: '배송 기사님께 남길 메모를 적습니다.',
    memo: '배송 메모',
    door: '부재 시 문 앞에 두기',
    policy: '배송 정책 보기',
    policyText: '예제: 배송 정책 — 메모는 배송 당일 오전까지 바꿀 수 있습니다.',
  },
  en: {
    practice: 'Practice sample',
    instructions: 'With a screen reader on, work through the task table below in this sample.',
    title: 'Example: Delivery note',
    lead: 'Write a note for the courier.',
    memo: 'Delivery note',
    door: 'Leave at the door if no one is home',
    policy: 'View delivery policy',
    policyText: 'Example: Delivery policy — you can change the note until the morning of delivery.',
  },
};

/** 03.5 실습의 같은 본문 예제. 이름 있는 영역(랜드마크) · 제목 · 링크 · 입력란 · 체크박스를 하나씩 둔다. 폼 제출이 없도록 form 요소는 쓰지 않는다. */
export const PracticeSample = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <section
        aria-labelledby="sr-sample-title"
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      >
        <h3 id="sr-sample-title" className="text-sm font-bold">
          {c.title}
        </h3>
        <p>{c.lead}</p>
        <div className="flex flex-col gap-xs">
          <label htmlFor="sr-sample-memo">{c.memo}</label>
          <input
            id="sr-sample-memo"
            type="text"
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm sm:w-1/2"
          />
        </div>
        <label htmlFor="sr-sample-door" className="inline-flex items-center gap-sm">
          <input id="sr-sample-door" type="checkbox" className="h-4 w-4" />
          {c.door}
        </label>
        <p>
          <a href="#sr-sample-policy">{c.policy}</a>
        </p>
        <p id="sr-sample-policy" className="text-text-light">
          {c.policyText}
        </p>
      </section>
    </PracticeFrame>
  );
};
